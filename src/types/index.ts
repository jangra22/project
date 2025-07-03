export interface SpreadsheetData {
  id: string;
  jobRequest: string;
  submitter: string;
  submitterAvatar?: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  estValue: string;
  status: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  initials: string;
  color: string;
}

export interface Column {
  key: keyof SpreadsheetData;
  label: string;
  width: number;
  type: 'text' | 'select' | 'date' | 'currency' | 'url';
}

export type TabType = 'All Orders' | 'Pending' | 'Reviewed' | 'Arrived';