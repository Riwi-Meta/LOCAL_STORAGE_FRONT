import { Select, SelectItem } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import "./../../styles/component.css";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { CashTitle } from "./CashTitle";
import CashNotes from "./CashNotes";

const options = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "dog", label: "Dog" },
  { key: "dog", label: "Dog" },
];

export const CashRegister = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="flex">
      {/* //DIV IZQUIERDA */}
      <div className="bg-white drop-shadow-xl p-12 rounded-2xl  flex flex-col h-[47rem] w-7/12 m-10">
        <CashTitle title="Cash Register" subtitle="Set your daily cash balance, let’s work!">
          <svg className="size-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M5.88889 3.75C6.3031 3.75 6.63889 3.41421 6.63889 3C6.63889 2.58579 6.3031 2.25 5.88889 2.25V3.75ZM10 2.25C9.58579 2.25 9.25 2.58579 9.25 3C9.25 3.41421 9.58579 3.75 10 3.75V2.25ZM18.1111 3.75C19.8214 3.75 21.25 5.19049 21.25 7.02036H22.75C22.75 4.40946 20.6964 2.25 18.1111 2.25V3.75ZM5.88889 2.25C3.30359 2.25 1.25 4.40946 1.25 7.02036H2.75C2.75 5.19049 4.17864 3.75 5.88889 3.75V2.25ZM21.25 7.02036C21.25 8.68726 20.0607 10.0357 18.557 10.2581L18.7764 11.7419C21.0419 11.4069 22.75 9.40421 22.75 7.02036H21.25ZM5.44305 10.2581C3.93934 10.0357 2.75 8.68726 2.75 7.02036H1.25C1.25 9.40422 2.95811 11.4069 5.22362 11.7419L5.44305 10.2581ZM10 3.75H18.1111V2.25H10V3.75Z"
                fill="#FF9500"></path>{" "}
              <path
                d="M12 9V14M12 14L14 11.6667M12 14L10 11.6667"
                stroke="#FF9500"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"></path>{" "}
              <path
                d="M5 10C5 8.11438 5 7.17157 5.58579 6.58579C6.17157 6 7.11438 6 9 6H15C16.8856 6 17.8284 6 18.4142 6.58579C19 7.17157 19 8.11438 19 10V16C19 17.8856 19 18.8284 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16V10Z"
                stroke="#FF9500"
                stroke-width="1.5"></path>{" "}
              <path
                d="M5 17H13M19 17H17"
                stroke="#FF9500"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"></path>{" "}
            </g>
          </svg>
        </CashTitle>

        <div className="columnas flex">
          <div className="columna1 scale-125 mr-32">
            <div className=" mx-3  rounded-md mt-20 mb-5 ml-10">
              <h1 className="font-sans font-medium text-dark text-base my-3 ">Branch</h1>
              <Select
                placeholder="Set your branch"
                labelPlacement="outside"
                className="w-80 "
                disableSelectorIconRotation>
                {options.map((option) => (
                  <SelectItem key={option.key}>{option.label}</SelectItem>
                ))}
              </Select>
            </div>
            <div className=" mx-3 rounded-md ml-10 ">
              <h1 className="font-sans font-medium text-dark text-base ">Notes</h1>
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
            <div className="flex  my-5 mr-3">
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

          <div className="Columna2 scale-125 mr-12">
            {/* 
        //Div cash machine */}
            <div className=" mx-3 rounded-md mt-20 mb-5 ">
              <h1 className="font-sans font-medium text-dark text-base my-3 ">Cash Machine</h1>
              <Select
                placeholder="Enter Type"
                labelPlacement="outside"
                className="max-w-xs"
                disableSelectorIconRotation>
                {options.map((option) => (
                  <SelectItem key={option.key}>{option.label}</SelectItem>
                ))}
              </Select>
            </div>
            <div className=" mx-3 rounded-md m-5 w-80">
              <h1 className="font-sans font-medium text-dark text-base ">Open Ammount</h1>

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
              <h1 className="font-sans font-medium text-dark text-base ">Final Ammount</h1>

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
            <div className="flex justify-end mt-36">
              <Button className="bg-orange font-bold" color="primary">
                Open
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* //DIV DERECHA */}
      <div className="columnaderecha h-auto">
        <div className="p-12 flex flex-col mt-10 ml-10 mr-10 ">
          <CashTitle title="Last notes" subtitle="Check your last notes">
            <svg className="size-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 1C4.34315 1 3 2.34315 3 4V20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V8.82843C21 8.03278 20.6839 7.26972 20.1213 6.70711L15.2929 1.87868C14.7303 1.31607 13.9672 1 13.1716 1H6ZM5 4C5 3.44772 5.44772 3 6 3H12V8C12 9.10457 12.8954 10 14 10H19V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4ZM18.5858 8L14 3.41421V8H18.5858Z"
                  fill="#FF9500"></path>{" "}
              </g>
            </svg>
          </CashTitle>
        </div>
        <div className="NotesPrincipal  pt-4 pl-4 pr-3 pb-10 overflow-y-scroll flex flex-col items-center gap-11 overflow-x-hidden h-[543px] ">
          <div className=" scale-110 shadow-none drop-shadow-non">
            <CashNotes />
          </div>
          <div className="scale-110 shadow-none drop-shadow-none ">
            <CashNotes />
          </div>
          <div className="scale-110">
            <CashNotes />
          </div>
          <div className="scale-110">
            <CashNotes />
          </div>
          <div className="scale-110">
            <CashNotes />
          </div>
          <div className="scale-110">
            <CashNotes />
          </div>
        </div>
      </div>
    </div>
  );
};
