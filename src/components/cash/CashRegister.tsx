import { Select, SelectItem } from "@nextui-org/react";
import {Input} from "@nextui-org/react";

const options = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "dog", label: "Dog" },
  { key: "dog", label: "Dog" },
];

export const CashRegister = () => {
  return (
    <div className="bg-white drop-shadow-xl p-12 rounded-2xl m-6 w-2/5">

      <div className=" mx-3  rounded-md m-5 ">
        <h1 className="font-sans font-medium text-dark text-2xl ">Branch</h1>
        <Select placeholder="Enter Type" labelPlacement="outside" className="max-w-xs" disableSelectorIconRotation>
          {options.map((option) => (
            <SelectItem key={option.key}>{option.label}</SelectItem>
          ))}
        </Select>
      </div>

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

    </div>
  );
};
