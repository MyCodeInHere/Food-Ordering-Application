interface Category {
    id: string;
    name: string;
    time: string;
    type: string;
    price: number;
    image: any;
    popular: boolean;
    isNew: boolean;
    items: {
      type: string;
      item: {
        name: string;
        describe: string;
        cost: number;
        image: any;
      }[];
    }[];
}