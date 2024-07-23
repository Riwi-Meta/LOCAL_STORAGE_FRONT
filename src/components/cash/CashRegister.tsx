import { Select, SelectItem } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import "./../../styles/component.css";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const options = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "dog", label: "Dog" },
  { key: "dog", label: "Dog" },
];



export const CashRegister = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    //DIV PRINCIPAL
    <div className="bg-white drop-shadow-xl p-12 rounded-2xl m-6 w-9/12 grid grid-cols-2 gap-4">
      <div id="Columna1">
        <div className=" mx-3  rounded-md m-5 ">
          <h1 className="font-sans font-medium text-dark text-2xl ">Branch</h1>
          <Select placeholder="Enter Type" labelPlacement="outside" className="max-w-xs" disableSelectorIconRotation>
            {options.map((option) => (
              <SelectItem key={option.key}>{option.label}</SelectItem>
            ))}
          </Select>
        </div>
        <div className=" mx-3 rounded-md m-5 ">
          <h1 className="font-sans font-medium text-dark text-2xl ">Notes</h1>
          <div className="w-full h-auto resize none">
            <Textarea
              disableAutosize={true}
              id="textarea-wrapper"
              className="resize-none w-80 h-full"
              placeholder="Enter Description"
            />
          </div>
        </div>

        {/*       BOTON ADD NOTE */}
        <div className="grid grid-cols-2 ml-16">
          <>
            <Button onPress={onOpen} className="bg-casiOrange text-orange ml-auto justify-end">
              Add Note
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 text-orange">Add Note</ModalHeader>
                    <ModalBody>
                      <Textarea
                        disableAutosize={true}
                        id="textarea-wrapper"
                        className="resize-none w-80 h-full"
                        placeholder="Enter Description"
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Add
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>
        </div>
      </div>

      <div id="Columna2">
        {/* 
        //Div cash machine */}
        <div className=" mx-3 rounded-md m-5 ">
          <h1 className="font-sans font-medium text-dark text-2xl ">Cash Machine</h1>
          <Select placeholder="Enter Type" labelPlacement="outside" className="max-w-xs" disableSelectorIconRotation>
            {options.map((option) => (
              <SelectItem key={option.key}>{option.label}</SelectItem>
            ))}
          </Select>
        </div>
        <div className=" mx-3 rounded-md m-5 w-80">
          <h1 className="font-sans font-medium text-dark text-2xl ">Open Ammount</h1>

          <Input
            type="number"
            placeholder="0.00"
            labelPlacement="outside"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">$</span>
              </div>
            }
          />
        </div>
        <div className=" mx-3 rounded-md m-5 w-80">
          <h1 className="font-sans font-medium text-dark text-2xl ">Final Ammount</h1>

          <Input
            type="number"
            placeholder="0.00"
            labelPlacement="outside"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">$</span>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};
