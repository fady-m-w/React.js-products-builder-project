import type { TProductsName } from "../types";

export interface Iproduct {
  id?: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: ICategory;
}

export interface IFormInput {
  id: string;
  name: TProductsName;
  label: string;
  type: string;
}

export interface ICategory {
  id: string;
  name: string;
  imageURL: string;
}
