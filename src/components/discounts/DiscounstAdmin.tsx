import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

import { Slider } from "@nextui-org/react";

interface props {}
export const DiscounstAdmin: React.FC<props> = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="p-10 flex flex-row">
      {" "}
      <div className="w-1/4">
        <div className="bg-white rounded-lg shadow-md p-4">
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
                      fill="currentColor"
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
              <button className="text-sm font-medium text-gray-500">
                Filter
              </button>
              <Slider
                label="Ammount"
                size="sm"
                color="warning"
                step={0.01}
                maxValue={1}
                minValue={-1}
                fillOffset={0}
                defaultValue={0}
                className="max-w-md"
                formatOptions={{ style: "percent", maximumFractionDigits: 2 }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4">
        <Button onPress={onOpen}>New Discount</Button>
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
