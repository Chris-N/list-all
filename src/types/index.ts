export interface Item {
  name: string;
  category: string;
  isComplete: boolean;
  createDatetime?: Date;
}

export interface DisplayItem {
  value: {
    name: string;
    isComplete: boolean;
    category: string;
  };
  index: number;
  handleToggle: () => void;
}
