import { v4 as uuid } from "uuid";
import type { IFormInput } from "../interfaces";
import { faker } from "@faker-js/faker";

export const colors = Array.from(
  new Set(Array.from({ length: 20 }, () => faker.color.rgb({ prefix: "#" }))),
).slice(0, 10);

export const categories = Array.from(
  new Set(
    Array.from({ length: 20 }, () => faker.commerce.department()).filter(
      (name) => name.trim() !== "",
    ),
  ),
)
  .slice(0, 5)
  .map((name) => ({
    id: uuid(),
    name,
    imageURL: faker.image.urlPicsumPhotos(),
  }));

export const productsList = Array.from({ length: 12 }, () => ({
  id: uuid(),
  title: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  imageURL: faker.image.urlPicsumPhotos(),
  price: faker.commerce.price(),
  colors: faker.helpers.arrayElements(colors, { min: 0, max: 5 }),
  category: faker.helpers.arrayElement(categories),
}));

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];
