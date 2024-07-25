import {
  Button,
  DateInput,
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
} from "@nextui-org/react";
import { useState } from "react";
import { CustomInput } from "./CustomInput";

export const ModalAddProduct = ({ isOpen, onOpenChange }) => {
  const [value, setValue] = useState(null);
  return (
    <Modal
      hideCloseButton
      className="flex justify-start min-w-[78rem] min-h-[42rem]"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent className="p-6 w-max flex rounded-3xl justify-center gap-5">
        {(onClose) => (
          <div className="flex flex-col gap-y-8">
            <ModalHeader className="flex flex-col text-6xl my-3 text-black">
              New Discount
            </ModalHeader>
            <ModalBody className="flex flex-col max-w-[55rem] mx-4">
              <div className="w-full flex ">
                <div className="w-full gap-x-20 gap-y-12 grid grid-cols-2">
                  <CustomInput name="Name">
                    <Input
                      size="sm"
                      type="string"
                      label={
                        <label className="text-gray font-semibold">
                          Enter Stock
                        </label>
                      }
                    />
                  </CustomInput>
                  <CustomInput name="Ammount">
                    <Input
                      radius="sm"
                      size="lg"
                      type="number"
                      placeholder="000.000,00"
                      labelPlacement="outside"
                      className="placeholder:font-bold placeholder:text-gray"
                    />
                  </CustomInput>
                  <CustomInput name="Type">
                    <Dropdown>
                      <DropdownTrigger
                        className="w-full justify-between"
                        endContent={
                          <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{ transform: "rotate(270deg)" }}
                          >
                            <path fill="#202020" d="M16 19L5 12l11-7z" />
                          </svg>
                        }
                      >
                        <Button
                          size="lg"
                          className="bg-casiWhite text-gray font-semibold"
                        >
                          Enter Type
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Static Actions">
                        <DropdownItem>Active</DropdownItem>
                        <DropdownItem>Inactive</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </CustomInput>
                  <CustomInput name="Status">
                    <Dropdown>
                      <DropdownTrigger
                        className="w-full justify-between"
                        endContent={
                          <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{ transform: "rotate(270deg)" }}
                          >
                            <path fill="#202020" d="M16 19L5 12l11-7z" />
                          </svg>
                        }
                      >
                        <Button
                          size="lg"
                          className="bg-casiWhite text-gray font-semibold"
                        >
                          Select Status
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Static Actions">
                        <DropdownItem>Active</DropdownItem>
                        <DropdownItem>Inactive</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </CustomInput>
                  <CustomInput name="Date">
                    <DateInput size="lg" value={value} onChange={setValue} />
                  </CustomInput>
                </div>
              </div>
            </ModalBody>
            <ModalFooter className="flex justify-end gap-14">
              <Button
                className="rounded-md p-6 size-28 text-xl font-semibol bg-transparent text-black  "
                onPress={onClose}
              >
                Cancel
              </Button>
              <Button
                className="rounded-md p-6 size-48 text-xl font-semibold text-white bg-orange"
                onPress={onClose}
              >
                Create Discount
              </Button>
            </ModalFooter>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
};
