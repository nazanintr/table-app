export interface TableProps<T> {
  data: T[] | Promise<T[]>;
  useMockData: boolean;
  columns: (keyof T)[];
  customHeader?: React.ReactNode;
  customColumnHeaders?: string[];
  pagination?: boolean;
  itemsPerPage: number;
  totalEntries: number;
  currentPage: number;
  selectedRows: T[];
  setSelectedRows: React.Dispatch<React.SetStateAction<T[]>>;
  getSelectedRows: () => T[];
  onNextPage: () => void;
  onPreviousPage: () => void;
}
