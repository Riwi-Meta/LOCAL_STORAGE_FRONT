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
      <div className="w-1/4">
        <div className="bg-white rounded-2xl shadow-md p-6">
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
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"
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
                  <Button color="undefined">Filter</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem>Ascendent</DropdownItem>
                  <DropdownItem>Descendent</DropdownItem>
                  <DropdownItem>A-Z</DropdownItem>
                  <DropdownItem>Z-A</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <div className="p-2">
                {" "}
                <div className="text-orange-500 font-bold">
                  {" "}
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
                        <path fill="currentColor" d="M16 19L5 12l11-7z" />
                      </svg>
                    }
                  >
                    <Button color="undefined" variant="bordered">
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
        <div className="bg-white rounded-lg shadow-md p-4">
          {" "}
          <Button onPress={onOpen}>New Discount</Button>
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
