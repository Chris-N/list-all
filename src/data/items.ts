interface Item {
  name: string;
  category: string;
  status: boolean;
  createDatetime?: Date;
}

export const Data: Item[] = [
  {
    name: 'Apples',
    category: 'Produce',
    status: false,
  },
  {
    name: 'Bananas',
    category: 'Produce',
    status: false,
  },
  {
    name: 'Peaches',
    category: 'Produce',
    status: false,
  },
];
