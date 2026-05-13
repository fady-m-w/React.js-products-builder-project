import { z } from "zod";

const stringSchema = (min: number, max: number, inputName: string) =>
  z
    .string()
    .min(min, `${inputName} Must Be Between ${min} And ${max} Characters!`)
    .max(max, `${inputName} Must Be Between ${min} And ${max} Characters!`);

export const productAddSchema = z.object({
  title: stringSchema(10, 80, "Product Title"),

  description: stringSchema(10, 900, "Product Description"),

  imageURL: z
    .string()
    .regex(/^(ftp|http|https):\/\/[^ "]+$/, "Valid Image URL Is Required"),

  price: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Valid Price Is Required",
  }),

  colors: z.array(z.string()).min(1, "Please select at least one color"),
});

export const productEditSchema = z.object({
  title: stringSchema(10, 80, "Product Title"),

  description: stringSchema(10, 900, "Product Description"),

  imageURL: z
    .string()
    .regex(/^(ftp|http|https):\/\/[^ "]+$/, "Valid Image URL Is Required"),

  price: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Valid Price Is Required",
  }),

  colors: z.array(z.string()),
});
