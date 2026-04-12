import type { Iproduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";

interface Iprops {
  product: Iproduct;
  setProductToEdit: (product: Iproduct) => void;
  openEditModal: () => void;
  idx: number;
  setProductToEditIdx: (value: number) => void;
}

const ProductCard = ({
  product,
  setProductToEdit,
  openEditModal,
  idx,
  setProductToEditIdx,
}: Iprops) => {
  const { title, description, imageURL, price, colors, category } = product;

  /* _________ RENDER _________ */
  const renderProductColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  /* _________ HANDLER _________ */
  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
    setProductToEditIdx(idx);
  };

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border p-2 rounded-md flex flex-col space-y-3">
      <Image
        imageUrl={imageURL}
        alt={"product name"}
        className="rounded-md h-52 w-full lg:object-cover"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-xs text-gray-500 wrap-break-word min-h-[31.98px]">
        {txtSlicer(description)}
      </p>

      <div className="flex flex-wrap items-center space-x-1">
        {renderProductColors}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-lg text-indigo-600 font-semibold">${price}</span>
        <Image
          imageUrl={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full cursor-pointer object-bottom"
        />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={onEdit}>
          edit
        </Button>
        <Button className="bg-red-700 hover:bg-red-800">remove</Button>
      </div>
    </div>
  );
};

export default ProductCard;
