import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productsList } from "./data";
import Button from "./components/ui/Button";

const App = () => {
  /* _________ STATE _________ */
  const [isOpen, setIsOpen] = useState(false);

  /* _________ HANDLER _________ */
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  /* _________ RENDER _________ */
  const renderProductList = productsList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <main className="container">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>
        add
      </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModel={closeModal} title="ADD A NEW PRODUCT">
        <div className="flex items-center space-x-3">
          <Button className="bg-indigo-700 hover:bg-indigo-800">submit</Button>
          <Button className="bg-gray-700 hover:bg-gray-800">cancel</Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
