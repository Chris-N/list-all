export interface Item {
  name: string;
  category: string;
  status: boolean;
  createDatetime?: Date;
}

export interface DisplayItem {
  value: string;
  index: number;
}
