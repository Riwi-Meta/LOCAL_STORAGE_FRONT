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
import { CardDiscountInactive } from "./CardDiscountInactive";
import { CardDiscountActive } from "./CardDiscountActive";
import { DateInput } from "@nextui-org/react";
import { parseDate, getLocalTimeZone } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import React from "react";
export const DiscounstAdmin: React.FC = () => {
  const [useStatus, setUseStatus] = React.useState(false);

  const lupaOn = useStatus
    ? " animate-Giro rotate-[90deg]"
    : "animate-Rotar  rotate-[0deg]";
  const useStatusOn = () => {
    setUseStatus(!useStatus);
  };

  const [value, setValue] = React.useState(parseDate("2024-04-04"));

  let formatter = useDateFormatter({ dateStyle: "full" });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="p-10 flex flex-row space-x-4">
      <div className="w-1/5">
        <div className="bg-white rounded-3xl shadow-md p-6 flex flex-col gap-4 ">
          <label className="relative block">
            <svg
              className={`size-6 absolute top-[0.4rem] left-2 ${lupaOn}`}
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
                <path
                  d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                  stroke="#BEBEBE"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <input
              onFocus={useStatusOn}
              className="placeholder:font-semibold block bg-white w-full border-3 border-gray rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray sm:text-sm"
              placeholder="Search"
              type="text"
              name="search"
            />
          </label>
          <Dropdown>
            <DropdownTrigger
              className="flex justify-start"
              startContent={
                <svg
                  className="size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#202020"
                    d="M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48m-80 112H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48m-96 112h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48"
                  />
                </svg>
              }
            >
              <Button className="font-bold text-gray bg-transparent text-large">
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

          <div className="font-bold textLabelCustom text-orange">
            <Slider
              size="sm"
              label={<label className="text-gray">Ammount</label>}
              maxValue={1}
              minValue={0}
              step={0.01}
              defaultValue={0}
              formatOptions={{ style: "percent" }}
              classNames={{
                base: "max-w-md",
                track: "border-s-warning-500",
                filler: "bg-warning-500",
              }}
              renderThumb={(props) => (
                <div
                  {...props}
                  className="group p-1 top-1/2 dark:border-default-400/50 rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                >
                  <span className="transition-transform bg-warning-500 rounded-full w-3.5 h-3.5 block group-data-[dragging=true]:scale-110" />
                </div>
              )}
            />
          </div>
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
              <Button className="bg-casiWhite text-gray font-bold">
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
      {/* contenedor de tarjetas y boton para agregar nuevo descuento */}
      <div className="w-3/4">
        <div className="w-full h-[25%] gap-8 grid grid-cols-3">
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
          <CardDiscountInactive />
          <CardDiscountActive />
          <CardDiscountInactive />
          <CardDiscountActive />
          <CardDiscountActive />
        </div>
        <Modal className="fixed flex justify-center" 
        isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent className="p-4 w-max flex h-max rounded-3xl justify-center gap-5">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col text-4xl">
                  New Discount
                </ModalHeader>
                <ModalBody className="flex flex-col w-full h-max">
                  <div className="w-full flex ">
                    <div className="w-full h-[6%] gap-8 grid grid-cols-2">
                      <div className="bg-default-400 ">
                        Name
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                          <Input type="string" label="Enter Stock" />
                        </div>
                      </div>
                      <div className="bg-default-400 ">
                        Ammount
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                          <Input
                            type="number"
                            placeholder="000.000,00"
                            labelPlacement="outside"
                          />
                        </div>
                      </div>
                      <div className="bg-default-400 ">
                        Type
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
                            <Button className="bg-casiWhite text-gray font-bold">
                              Enter Type
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu aria-label="Static Actions">
                            <DropdownItem>Active</DropdownItem>
                            <DropdownItem>Inactive</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                      <div className="bg-default-400 ">
                        Status
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
                            <Button className="bg-casiWhite text-gray font-bold">
                              Select Status
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu aria-label="Static Actions">
                            <DropdownItem>Active</DropdownItem>
                            <DropdownItem>Inactive</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                      <div className="bg-default-400 ">
                        Date
                        <div className="w-full flex flex-row gap-2">
                          <div className="w-full flex flex-col gap-y-2">
                            <DateInput
                              label="Date (controlled)"
                              value={value}
                              onChange={setValue}
                            />
                            <p className="text-default-500 text-sm">
                              Selected date:{" "}
                              {value
                                ? formatter.format(
                                    value.toDate(getLocalTimeZone())
                                  )
                                : "--"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-3/4"></div>
                </ModalBody>
                <ModalFooter>
                  <Button className="rounded-md"
                  color="danger" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button className="rounded-md" 
                  color="primary" onPress={onClose}>
                    Create Discount
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
