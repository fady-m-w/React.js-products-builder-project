import { useState, type ChangeEvent, type SubmitEvent } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { categories, colors, formInputsList, productsList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import type { Iproduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import { v4 as uuid } from "uuid";
import Select from "./components/ui/Select";
import type { TProductsName } from "./types";
import toast, { Toaster } from "react-hot-toast";
const App = () => {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      id: "",
      name: "",
      imageURL: "",
    },
  };

  /* _________ STATE _________ */
  const [products, setProducts] = useState<Iproduct[]>(productsList);
  const [product, setProduct] = useState<Iproduct>(defaultProductObj);
  const [productToEdit, setProductToEdit] =
    useState<Iproduct>(defaultProductObj);
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenRemove, setIsOpenRemove] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  /* _________ HANDLER _________ */
  const resetForm = () => {
    setProduct(defaultProductObj);
    setErrors({
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: "",
    });
    setTempColors([]);
    setSelectedCategory(categories[0]);
  };

  const closeModal = () => setIsOpen(false);
  const openModal = () => {
    resetForm();
    setIsOpen(true);
  };
  const closeEditModal = () => setIsOpenEdit(false);
  const openEditModal = () => setIsOpenEdit(true);
  const closeRemoveModal = () => setIsOpenRemove(false);
  const openRemoveModal = () => setIsOpenRemove(true);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const onCancel = () => {
    resetForm();
    closeModal();
  };

  const onEditCancel = () => {
    closeEditModal();
  };

  const submitHandler = (event: SubmitEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = product;
    const validationErrors = productValidation({
      title,
      description,
      imageURL,
      price,
      colors: tempColors,
    });

    const hasErrorMsg = Object.values(validationErrors).some(
      (value) => value !== "",
    );

    if (hasErrorMsg) {
      setErrors(validationErrors);
      return;
    }
    setProducts((prev) => [
      {
        ...product,
        id: uuid(),
        colors: tempColors,
        category: selectedCategory,
      },
      ...prev,
    ]);
    setProduct(defaultProductObj);
    setTempColors([]);
    closeModal();
    toast("Product Has Been Added!", {
      icon: "🎉",
    });
  };

  const submitEditHandler = (event: SubmitEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const originalProduct = products[productToEditIdx];
    const hasChanges =
      JSON.stringify({
        ...productToEdit,
        colors: tempColors.concat(productToEdit.colors),
      }) !== JSON.stringify(originalProduct);

    if (!hasChanges) {
      toast("No changes were made.", { icon: "ℹ️" });
      return;
    }
    const { title, description, imageURL, price } = productToEdit;
    const validationErrors = productValidation({
      title,
      description,
      imageURL,
      price,
      colors: products[productToEditIdx].colors,
    });

    const hasErrorMsg = Object.values(validationErrors).some(
      (value) => value !== "",
    );

    if (hasErrorMsg) {
      setErrors(validationErrors);
      return;
    }

    const updatedProducts = [...products];
    updatedProducts[productToEditIdx] = {
      ...productToEdit,
      colors: tempColors.concat(productToEdit.colors),
    };
    setProducts(updatedProducts);

    closeEditModal();
    setProductToEdit(defaultProductObj);
    setTempColors([]);
    toast("Product Has Been Updated.", {
      icon: "🔃",
    });
  };

  const removeHandler = () => {
    const filtered = products.filter(
      (product) => product.id !== productToEdit.id,
    );
    setProducts(filtered);
    closeRemoveModal();
    toast("Product Has Been Deleted.", {
      icon: "❌",
    });
  };

  /* _________ RENDER _________ */
  const renderProductList = products.map((product, idx) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
      openRemoveModal={openRemoveModal}
      idx={idx}
      setProductToEditIdx={setProductToEditIdx}
    />
  ));
  const renderFormInputList = formInputsList.map((input, idx) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-px text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        autoFocus={idx === 0}
        type={input.type}
        name={input.name}
        id={input.id}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  const renderProductColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => {
            const next = prev.filter((item) => item !== color);
            // If next becomes empty, don't clear the error here — let submit set it.
            // But if it's non-empty, clear the colors error immediately:
            if (next.length > 0) {
              setErrors((prev) => ({ ...prev, colors: "" }));
            }
            return next;
          });
          return;
        }

        if (productToEdit.colors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColors((prev) => {
          const next = [...prev, color];
          if (next.length > 0) {
            setErrors((prev) => ({ ...prev, colors: "" }));
          }
          return next;
        });
      }}
    />
  ));

  const renderProductEdit = (
    id: string,
    label: string,
    type: string,
    name: TProductsName,
  ) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="mb-px text-sm font-medium text-gray-700">
          {label}
        </label>
        <Input
          type={type}
          name={name}
          id={id}
          value={productToEdit[name]}
          onChange={onChangeEditHandler}
        />
        <ErrorMessage msg={errors[name]} />
      </div>
    );
  };

  return (
    <main className="container ">
      <Button
        className="block bg-indigo-600 hover:opacity-90 ml-6 my-10 px-6 font-medium"
        width="w-fit"
        onClick={openModal}
      >
        Add product
      </Button>

      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {products.length === 0 ? (
          <p
            className="text-center text-5xl mx-auto font-bold col-span-full"
            style={{ color: "#c2344d" }}
          >
            No products available :(
          </p>
        ) : (
          renderProductList
        )}
      </div>

      {/* ADD PRODUCT MODAL */}
      <Modal isOpen={isOpen} closeModel={closeModal} title="ADD A NEW PRODUCT">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
          <div className="flex flex-wrap items-center space-x-1">
            {tempColors.map((color) => (
              <span
                key={color}
                className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                style={{ background: color }}
              >
                {color}
              </span>
            ))}
          </div>
          <ErrorMessage msg={errors.colors} />
          <div className="flex flex-wrap items-center space-x-1">
            {renderProductColors}
          </div>

          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              submit
            </Button>
            <Button
              type="button"
              className="bg-gray-400 hover:bg-gray-500"
              onClick={onCancel}
            >
              cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* EDIT PRODUCT MODAL */}
      <Modal
        isOpen={isOpenEdit}
        closeModel={closeEditModal}
        title="EDIT THIS PRODUCT"
      >
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderProductEdit("title", "Product Title", "text", "title")}
          {renderProductEdit(
            "description",
            "Product Description",
            "text",
            "description",
          )}
          {renderProductEdit(
            "imageURL",
            "Product Image URL",
            "text",
            "imageURL",
          )}
          {renderProductEdit("price", "Product Price", "text", "price")}

          <Select
            selected={productToEdit.category}
            setSelected={(value) =>
              setProductToEdit({ ...productToEdit, category: value })
            }
          />

          <div className="flex flex-wrap items-center space-x-1">
            {tempColors.concat(productToEdit.colors).map((color) => (
              <span
                key={color}
                className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                style={{ background: color }}
              >
                {color}
              </span>
            ))}
          </div>
          <ErrorMessage msg={errors.colors} />
          <div className="flex flex-wrap items-center space-x-1">
            {renderProductColors}
          </div>

          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              submit
            </Button>
            <Button
              type="button"
              className="bg-gray-400 hover:bg-gray-500"
              onClick={onEditCancel}
            >
              cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* DELETE MODAL */}
      <Modal
        isOpen={isOpenRemove}
        closeModel={closeRemoveModal}
        title="Are You Sure To Remove This Product From Your Store"
      >
        <p className="text-md text-gray-500 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          neque provident nisi eveniet tempore corrupti similique accusamus
          officia totam incidunt?
        </p>
        <div className="flex gap-3 pt-1  ">
          <Button className="flex-1 bg-[#c2344d] " onClick={removeHandler}>
            Yes, Remove
          </Button>
          <Button
            type="button"
            onClick={closeRemoveModal}
            className="flex-1 bg-gray-100 hover:bg-gray-200"
            style={{ color: "black" }}
          >
            Cancel
          </Button>
        </div>
      </Modal>

      <Toaster />
    </main>
  );
};

export default App;
