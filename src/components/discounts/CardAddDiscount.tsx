import { useDisclosure } from "@nextui-org/react";
import { ModalAddProduct } from "./ModalAddProduct";

export const CardAddDiscount = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div
        onClick={onOpen}
        className="bg-white rounded-3xl shadow-md p-6 cursor-pointer transition-all hover:animate-Rebote"
      >
        <div className="text-orange">
          <div className="font-bold left-0 top-0 text-3xl bg-transparent text-orange">
            New Discount
          </div>
        </div>
        <div className="flex justify-center p-6">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="8em"
            height="8em"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M8 12H16"
                stroke="#FF9500"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M12 16V8"
                stroke="#FF9500"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#FF9500"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
      <ModalAddProduct isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
