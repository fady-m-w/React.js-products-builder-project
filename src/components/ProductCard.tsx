import type { Iproduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";
interface Iprops {
  product: Iproduct;
}

const ProductCard = ({ product }: Iprops) => {
  const { title, description, imageURL, price, category } = product;
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border p-2 rounded-md flex flex-col space-y-3">
      <Image
        imageUrl={imageURL}
        alt={"product name"}
        className="rounded-md h-52 w-full lg:object-cover"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-xs text-gray-500 wrap-break-word">
        {txtSlicer(description)}
      </p>

      <div className="flex items-center space-x-2">
        <span className="w-5 h-5 bg-blue-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-fuchsia-600 rounded-full cursor-pointer" />
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
        <Button className="bg-indigo-700 hover:bg-indigo-800">edit</Button>
        <Button className="bg-red-700 hover:bg-red-800">remove</Button>
      </div>
    </div>
  );
};

export default ProductCard;
