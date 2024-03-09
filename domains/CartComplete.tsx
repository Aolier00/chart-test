import { Product } from "./Product";

export interface CartComplete {
    id: number;
    userId: number;
    date: string;
    products: Product[];
    __v: number;
  }