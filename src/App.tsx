import Header from './components/Header/Header';
import Toolbar from './components/Toolbar/Toolbar';
import SpreadsheetGrid from './components/Spreadsheet/SpreadsheetGrid';
import BottomTabs from './components/Tabs/BottomTabs';
import { mockData } from './data/mockData';
import { SpreadsheetData, TabType } from './types';

function App() {
  const [data, setData] = useState<SpreadsheetData[]>(mockData);
  const [activeTab, setActiveTab] = useState<TabType>('All Orders');

  const getFilteredData = () => {
    switch (activeTab) {
      case 'Pending':
        return data.filter(row => row.status === 'Submitted' || row.status === 'To start');
      case 'Reviewed':
        return data.filter(row => row.status === 'In-process');
      case 'Arrived':
        return data.filter(row => row.status === 'Complete');
      default:
        return data;
    }
  };

  const filteredData = getFilteredData();

  return (
    <div className="min-h-screen bg-excel-gray-50 flex flex-col">
      <Header />
      <Toolbar />
      
      <div className="flex-1 flex flex-col">
        <SpreadsheetGrid 
          data={filteredData}
          onDataChange={setData}
        />
        
        <BottomTabs 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </div>
  );
}

export default App;
