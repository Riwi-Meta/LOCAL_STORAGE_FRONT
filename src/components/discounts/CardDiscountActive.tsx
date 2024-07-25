interface CardDiscountActiveProps {
  NameProduct: string;
  Code: string;
  Discount: GLfloat;
}

export const CardDiscountActive: React.FC<CardDiscountActiveProps> = ({
  NameProduct,
  Code,
  Discount,
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-md flex align-middle">
      <div className="flex flex-col gap-6 justify-between">
        {/* contenedor de nombre de producto,icono editar y codigo de producto*/}
        <div className="w-full h-auto flex flex-col">
          <div className="flex justify-between">
            <p className="text-black font-bold text-3xl">
              Discount on {NameProduct}
            </p>
            <svg
              className="size-8"
              cursor={"pointer"}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M14 6L8 12V16H12L18 10M14 6L17 3L21 7L18 10M14 6L18 10M10 4L4 4L4 20L20 20V14"
                  stroke="#003C74"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </div>
          <p className="text-gray font-bold">code:{Code}</p>
        </div>
        <p className="text-orange font-bold text-xl">
          -{Discount}%
        </p>
        <div className="w-full h-auto flex justify-between">
          <p className="text-green text-3xl font-bold">
            Active
          </p>
          <svg
            className="size-8"
            cursor={"pointer"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 6H20L18.4199 20.2209C18.3074 21.2337 17.4512 22 16.4321 22H7.56786C6.54876 22 5.69264 21.2337 5.5801 20.2209L4 6Z"
                stroke="#202020"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M7.34491 3.14716C7.67506 2.44685 8.37973 2 9.15396 2H14.846C15.6203 2 16.3249 2.44685 16.6551 3.14716L18 6H6L7.34491 3.14716Z"
                stroke="#202020"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M2 6H22"
                stroke="#202020"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10 11V16"
                stroke="#202020"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14 11V16"
                stroke="#202020"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
