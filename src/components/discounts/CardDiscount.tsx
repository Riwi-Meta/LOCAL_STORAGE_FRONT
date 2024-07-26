import { DeleteButton } from "./icons/DeleteButton";
import { EditButton } from "./icons/EditButton";

interface CardDiscountInactiveProps {
  NameProduct: string;
  Code: string;
  Discount: GLfloat;
  isActive?: boolean;
}

export const CardDiscount: React.FC<CardDiscountInactiveProps> = ({
  NameProduct,
  Code,
  isActive = false,
  Discount,
}) => {
  return (
    <div
      className={`${
        isActive ? "bg-white" : "bg-casiBlack"
      } rounded-3xl p-6 shadow-md flex align-middle min-w-80`}
    >
      <div className="flex flex-col gap-6 justify-between">
        {/* contenedor de nombre de producto,icono editar y codigo de producto*/}
        <div className="w-full h-auto flex flex-col">
          <div className="flex justify-between gap-x-16 w-full">
            <p
              className={`${
                isActive ? "text-casiBlack" : "text-white"
              } font-bold text-3xl`}
            >
              <p className="text-nowrap">
                Discount on <br />
                {NameProduct}
              </p>
            </p>
            <EditButton color={isActive ? "#003C74" : "white"} />
          </div>
          <p className={`text-gray font-bold`}>code:{Code}</p>
        </div>
        <p
          className={`${
            isActive ? "text-orange" : "text-white"
          } font-bold text-xl`}
        >
          -{Discount}%
        </p>
        <div className="w-full h-auto flex justify-between">
          <p
            className={`${
              isActive ? "text-green" : "text-orange"
            } text-3xl font-bold`}
          >
            {isActive ? "Active" : "Inactive"}
          </p>
          <DeleteButton color={isActive ? "#202020" : "white"} />
        </div>
      </div>
    </div>
  );
};
