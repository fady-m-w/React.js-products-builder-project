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
  colors: string[];
}) => {
  // ** Returns an object
  const errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
    colors: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: "",
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

  if (product.colors.length === 0) {
    // This condition checks if the colors array is empty.
    // It ensures the user has selected at least one color before submitting the form.
    // If no colors are selected, an error message will be returned to prevent submission.
    errors.colors = "Please select at least one color";
  }

  return errors;
};
