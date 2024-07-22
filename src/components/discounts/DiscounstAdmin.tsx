import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

import { Slider } from "@nextui-org/react";
import "./CustomDiscountsStyle.css";

interface props {}
export const DiscounstAdmin: React.FC<props> = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="p-10 flex flex-row space-x-4">
      {" "}
      <div className="w-1/5">
        <div className="bg-white rounded-3xl shadow-md p-6">
          <div className="flex">
            <div className="w-full">
              <Input
                startContent={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#666666"
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a0.5 0.5 0 0 1-.707.707l-3.85-3.85a0.5 0.5 0 0 1-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"
                    />
                  </svg>
                }
                placeholder="Search"
                size="md"
                width="auto"
                radius="full"
                variant="bordered"
              />
              <Dropdown>
                <DropdownTrigger
                  className="p-6"
                  startContent={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#666666"
                        d="M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48m-80 112H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48m-96 112h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48"
                      />
                    </svg>
                  }
                >
                  <Button color="undefined" className="filterButtonCustom">
                    Filter
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem>Ascendent</DropdownItem>
                  <DropdownItem>Descendent</DropdownItem>
                  <DropdownItem>A-Z</DropdownItem>
                  <DropdownItem>Z-A</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <div className="p-2">
                <div className="font-bold textLabelCustom">
                  <Slider
                    label={<label className="slider-label">Ammount</label>}
                    size="sm"
                    color="warning"
                    step={0.01}
                    maxValue={1}
                    minValue={0}
                    fillOffset={0}
                    defaultValue={0}
                    className="max-w-md"
                    formatOptions={{ style: "percent" }}
                  />
                </div>
                <Dropdown>
                  <DropdownTrigger
                    className="w-full justify-between"
                    endContent={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                        style={{ transform: "rotate(270deg)" }}
                      >
                        <path fill="#202020" d="M16 19L5 12l11-7z" />
                      </svg>
                    }
                  >
                    <Button color="undefined" className="statusButtonCustom">
                      Status
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem>Active</DropdownItem>
                    <DropdownItem>Inactive</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4">
        <div className="w-full h-[25%] gap-8 grid grid-cols-3">
          <div className="bg-white rounded-3xl shadow-md p-6">
            <div className="add-buttonCustom">
              <Button
                className="font-bold left-0 top-0 text-3xl"
                color="undefined"
                onPress={onOpen}
              >
                New Discount
              </Button>
            </div>
            <div className="icon-button-add-custom p-3">
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
          <div className="bg-casiBlack rounded-3xl p-6 shadow-md flex align-middle">
            <div className="flex flex-col gap-12 w-full h-full">
              {/* contenedor de nombre de producto,icono editar y codigo de producto*/}
              <div className="w-full h-auto flex flex-col">
                <div className="flex justify-between">
                  <p className="text-white font-bold productNameDiscountCustom">
                    producto
                  </p>
                  <svg
                  // onClick={} 
                  className="size-9"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                        d="M14 6L8 12V16H12L18 10M14 6L17 3L21 7L18 10M14 6L18 10M10 4L4 4L4 20L20 20V14"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <p className="codeProductCustom">codigo</p>
              </div>
              <p className="valueAssignedToProductCustom bg-orange-600">56%</p>
              <div className="w-full h-auto flex justify-between">
                <p className="stateDiscountCustom bg-lime-800">estado</p>
                <i className="deleteDicountCardCustom bg-red-700">
                  icono borrar
                </i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-md">jelou</div>
          <div className="bg-white rounded-3xl p-6 shadow-md">jelou</div>
          <div className="bg-white rounded-3xl p-6 shadow-md">jelou</div>
        </div>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Modal Title
                </ModalHeader>
                <ModalBody>
                  {/* contenido  */}
                  <span>contenido</span>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};
