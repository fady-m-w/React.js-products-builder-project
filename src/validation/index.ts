/**
 *
 * @param product
 * @returns
 */
export const productValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
  // ** Returns an object
  const errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Product Title Must Be Between 10 And 80 Characters!";
  }

  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 900
  ) {
    errors.description =
      "Product Description Must Be Between 10 And 900 Characters!";
  }

  if (!product.imageURL.trim() || !validUrl) {
    errors.imageURL = "Valid Image URL Is Required";
  }

  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "Valid Price Is Required";
  }

  return errors;
};
