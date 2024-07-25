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
import { StringInput } from "./InputsModal/StringInput";
import { NumberInput } from "./InputsModal/NumberInput";
import { TypeInput } from "./InputsModal/TypeInput";

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
                  <StringInput name="Name" placeholder="Enter Stock" />
                  <NumberInput name="Ammount" placeholder="000.000,00" />
                  <TypeInput name="Type" placeholder="Enter Type" />
                  <TypeInput name="Status" placeholder="Select Status" />
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
