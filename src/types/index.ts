export interface Item {
  name: string;
  category: string;
  status: boolean;
  createDatetime?: Date;
}

export interface DisplayItem {
  value: {
    name: string;
    status: boolean;
    category: string;
  };
  index: number;
  handleToggle: () => void;
}
