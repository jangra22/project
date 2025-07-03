import { SpreadsheetData, User, Column } from '../types';

export const mockData: SpreadsheetData[] = [
  {
    id: '1',
    jobRequest: 'Launch social media campaign for product',
    submitter: 'Aisha Patel',
    submitterAvatar: 'AP',
    url: 'www.aishapatel.com',
    assigned: 'Sophie Choudhury',
    priority: 'Medium',
    dueDate: '20-11-2024',
    estValue: '6,200,000',
    status: 'Submitted'
  },
  {
    id: '2',
    jobRequest: 'Update press kit for company redesign',
    submitter: 'Irfan Khan',
    submitterAvatar: 'IK',
    url: 'www.irfankhan.com',
    assigned: 'Tejas Pandey',
    priority: 'High',
    dueDate: '30-10-2024',
    estValue: '3,500,000',
    status: 'To start'
  },
  {
    id: '3',
    jobRequest: 'Finalize user testing feedback for app',
    submitter: 'Mark Johnson',
    submitterAvatar: 'MJ',
    url: 'www.markjohns.com',
    assigned: 'Rachel Lee',
    priority: 'Medium',
    dueDate: '10-12-2024',
    estValue: '4,750,000',
    status: 'In-process'
  },
  {
    id: '4',
    jobRequest: 'Design new features for the website',
    submitter: 'Emily Green',
    submitterAvatar: 'EG',
    url: 'www.emilygreen.com',
    assigned: 'Tom Wright',
    priority: 'High',
    dueDate: '15-01-2025',
    estValue: '5,800,000',
    status: 'Complete'
  },
  {
    id: '5',
    jobRequest: 'Prepare financial report for Q4',
    submitter: 'Jessica Brown',
    submitterAvatar: 'JB',
    url: 'www.jessicabro.com',
    assigned: 'Kevin Smith',
    priority: 'Medium',
    dueDate: '30-01-2025',
    estValue: '2,800,000',
    status: 'Blocked'
  }
];

export const users: User[] = [
  { id: '1', name: 'Aditya Pundir', avatar: '', initials: 'A', color: 'bg-red-500' },
  { id: '2', name: 'Suryavamsi', avatar: '', initials: 'S', color: 'bg-purple-500' },
  { id: '3', name: 'User 3', avatar: '', initials: 'U', color: 'bg-green-500' },
  { id: '4', name: 'User 4', avatar: '', initials: 'U', color: 'bg-blue-500' },
  { id: '5', name: 'User 5', avatar: '', initials: 'U', color: 'bg-yellow-500' },
  { id: '6', name: 'Anushka', avatar: '', initials: 'A', color: 'bg-pink-500' }
];

export const columns: Column[] = [
  { key: 'jobRequest', label: 'Job Request', width: 300, type: 'text' },
  { key: 'submitter', label: 'Submitter', width: 150, type: 'text' },
  { key: 'url', label: 'URL', width: 180, type: 'url' },
  { key: 'assigned', label: 'Assigned', width: 150, type: 'text' },
  { key: 'priority', label: 'Priority', width: 100, type: 'select' },
  { key: 'dueDate', label: 'Due Date', width: 120, type: 'date' },
  { key: 'estValue', label: 'Est. Value', width: 120, type: 'currency' }
];

// Excel-style column headers (A, B, C, etc.)
export const getColumnLabel = (index: number): string => {
  let result = '';
  while (index >= 0) {
    result = String.fromCharCode(65 + (index % 26)) + result;
    index = Math.floor(index / 26) - 1;
  }
  return result;
};