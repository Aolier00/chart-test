export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: Product[];
  __v: number;
}

export interface Product {
  productId: number;
  quantity: number;
}

export interface CartsByMonth {
  date: string;
  carts: Cart[];
}

export interface CartsByCategory {
  date: string;
  carts: Cart[];
}