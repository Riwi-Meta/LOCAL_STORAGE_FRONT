import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  useDisclosure,
  Slider,
} from "@nextui-org/react";

import { CardDiscountInactive } from "./CardDiscountInactive";
import { CardDiscountActive } from "./CardDiscountActive";
import { parseDate } from "@internationalized/date";
import { CardAddDiscount } from "./CardAddDiscount";
import React from "react";
export const DiscounstAdmin: React.FC = () => {
  const [useStatus, setUseStatus] = React.useState(false);

  const lupaOn = useStatus
    ? " animate-Giro rotate-[90deg]"
    : "animate-Rotar  rotate-[0deg]";
  const useStatusOn = () => {
    setUseStatus(!useStatus);
  };

  const [] = React.useState(parseDate("2024-04-04"));

  const { onOpen } = useDisclosure();
  return (
    <div className="p-10 flex flex-row space-x-4">
      <div className="w-1/5">
        <div className="bg-white rounded-3xl shadow-md p-6 flex flex-col gap-4 ">
          <label className="relative block">
            <svg
              className={`size-6 absolute top-[0.4rem] left-2 transition-all ${lupaOn}`}
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
                  d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                  stroke="#BEBEBE"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
      <div className="w-full">
        <div className="gap-4 grid grid-cols-4">
          <div onClick={onOpen}>
            <CardAddDiscount />
          </div>
          <CardDiscountInactive
            NameProduct={"Rice"}
            Code={"DR-01655"}
            Discount={5.25}
          />
          <CardDiscountActive
            NameProduct={"Meat"}
            Code={"DM-01325"}
            Discount={15.25}
          />
          <CardDiscountInactive
            NameProduct={"Rice"}
            Code={"DR-01655"}
            Discount={5.25}
          />
          <CardDiscountActive
            NameProduct={"Meat"}
            Code={"DM-01325"}
            Discount={15.25}
          />
          <CardDiscountActive
            NameProduct={"Meat"}
            Code={"DM-01325"}
            Discount={15.25}
          />
        </div>
      </div>
    </div>
  );
};
