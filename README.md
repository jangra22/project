# Excel Clone - Collaborative Spreadsheet Application

A pixel-perfect Microsoft Excel clone built with React 18, TypeScript, and Tailwind CSS, featuring collaborative editing capabilities and modern web design.

## 🚀 Live Demo

[View Live Application](https://your-app-url.netlify.app) *(Update this URL after deployment)*

## 📋 Features

### Core Features
- **Microsoft Excel-like Interface**: Authentic Excel appearance with proper grid layout, column headers (A, B, C...), and row numbers
- **Collaborative Editing**: Real-time user avatars showing who's currently editing
- **Advanced Toolbar**: Complete set of Excel-style tools including Hide Fields, Sort, Filter, Import, Export, Share
- **Data Management**: Editable cells with support for different data types (text, URLs, dates, currency)
- **Status & Priority Badges**: Color-coded status indicators and priority levels
- **Tab Navigation**: Bottom tabs for filtering different data views
- **Responsive Design**: Works seamlessly across all device sizes

### Advanced Features
- **Keyboard Navigation**: Navigate through cells using arrow keys, Enter, and Escape
- **Column Resizing**: Drag column borders to resize columns
- **Column Hide/Show**: Toggle column visibility
- **Cell Selection**: Click to select cells with visual feedback
- **Data Filtering**: Filter data by status (All Orders, Pending, Reviewed, Arrived)

## 🛠️ Tech Stack

- **React 18** with TypeScript in strict mode
- **Tailwind CSS** for utility-first styling with custom Excel color palette
- **Lucide React** for modern, consistent icons
- **Vite** for fast development and building
- **ESLint & Prettier** for code quality and formatting

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/excel-clone-app.git
   cd excel-clone-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run preview` - Preview production build

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/           # Navigation breadcrumbs and user section
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   └── UserSection.tsx
│   ├── Spreadsheet/      # Grid, rows, cells, and headers
│   │   ├── SpreadsheetGrid.tsx
│   │   ├── SpreadsheetHeader.tsx
│   │   ├── SpreadsheetRow.tsx
│   │   ├── SpreadsheetCell.tsx
│   │   └── ColumnResizer.tsx
│   ├── Tabs/            # Bottom navigation tabs
│   │   └── BottomTabs.tsx
│   └── Toolbar/         # Excel-style toolbar with actions
│       └── Toolbar.tsx
├── hooks/               # Custom React hooks
│   ├── useKeyboardNavigation.ts
│   └── useColumnResize.ts
├── data/                # Mock data and column configurations
│   └── mockData.ts
├── types/               # TypeScript type definitions
│   └── index.ts
└── App.tsx             # Main application component
```

## 🎨 Design Features

- **Authentic Excel Colors**: Custom color palette matching Microsoft Excel
- **Segoe UI Font**: Microsoft's signature font for authentic appearance
- **Grid Layout**: Proper Excel-style grid with column letters and row numbers
- **Status Badges**: Color-coded status and priority indicators
- **User Avatars**: Collaborative editing indicators with user initials
- **Hover States**: Subtle interactions throughout the interface
- **Responsive Grid**: Adapts to different screen sizes while maintaining Excel feel

## ⌨️ Keyboard Navigation

- **Arrow Keys**: Navigate between cells (Up, Down, Left, Right)
- **Enter**: Confirm cell edit or move to next row
- **Escape**: Cancel cell edit
- **Tab**: Move to next cell (browser default)

## 🔧 Column Management

- **Resize Columns**: Hover over column borders and drag to resize
- **Hide/Show Columns**: Use the toolbar "Hide fields" button to toggle column visibility
- **Minimum Width**: Columns have a minimum width of 50px for usability

## 📊 Data Structure

The application uses a flexible data structure supporting:
- Job requests with detailed descriptions
- User assignments with avatar support
- Priority levels (High, Medium, Low)
- Status tracking (Complete, In-process, To start, Blocked, Submitted)
- URL links and date fields
- Currency formatting for estimated values

## 🎯 Trade-offs and Decisions

### Performance Optimizations
- **Virtual Scrolling**: Not implemented in this version for simplicity, but would be needed for large datasets (1000+ rows)
- **Memoization**: Used React.memo and useCallback strategically to prevent unnecessary re-renders
- **Event Delegation**: Keyboard navigation uses document-level event listeners for better performance

### Design Decisions
- **Fixed Column Count**: Limited to predefined columns for demo purposes
- **Mock Data**: Uses static data instead of real backend integration
- **Simplified Formulas**: No Excel formula engine implemented
- **Basic Editing**: Simple text editing without rich formatting options

### Browser Compatibility
- **Modern Browsers**: Optimized for Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **CSS Grid**: Uses modern CSS features, may need polyfills for older browsers
- **ES6+ Features**: Requires modern JavaScript support

### Accessibility
- **Keyboard Navigation**: Full keyboard support for grid navigation
- **Focus Management**: Proper focus indicators and management
- **Screen Readers**: Basic ARIA labels (could be enhanced further)
- **Color Contrast**: Meets WCAG guidelines for text readability

## 🚀 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite configuration
3. Deploy with default settings

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist` folder contents to your web server
3. Configure server to serve `index.html` for all routes

## 🧪 Testing

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

### Code Formatting
```bash
npm run format
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and ensure they pass linting: `npm run lint`
4. Run type checking: `npm run type-check`
5. Format your code: `npm run format`
6. Commit your changes: `git commit -m 'Add amazing feature'`
7. Push to the branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

## 📝 Code Quality

This project maintains high code quality through:
- **TypeScript**: Strict type checking enabled
- **ESLint**: Comprehensive linting rules
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks (can be added)
- **Component Architecture**: Clean, modular component design

## 🔮 Future Enhancements

- **Real-time Collaboration**: WebSocket integration for live editing
- **Formula Engine**: Excel-like formula calculation
- **Data Import/Export**: CSV, XLSX file support
- **Advanced Filtering**: Multi-column filtering and sorting
- **Undo/Redo**: Action history management
- **Cell Formatting**: Rich text, colors, borders
- **Charts and Graphs**: Data visualization components
- **Print Support**: Proper print layouts

## 📄 License

This project is for demonstration purposes showcasing modern React development practices and Excel-like interface design.

## 👥 Team

- **Developer**: [Your Name]
- **Design Reference**: Microsoft Excel interface
- **Icons**: Lucide React icon library

---

**Note**: This is a demonstration project built for educational purposes. It showcases modern React development practices and responsive design principles.