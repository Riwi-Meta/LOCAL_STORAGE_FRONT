import { Select, SelectItem } from "@nextui-org/react";

const options = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "dog", label: "Dog" },
  { key: "dog", label: "Dog" },
];

export const CashRegister = () => {
  return (
    <div className="bg-dark p-12">

      <div className="w-full mx-3  rounded-md !bg-white m-5 ">
        <h1 className="font-sans font-medium text-dark text-2xl ">Branch</h1>
        <Select placeholder="Enter Type" labelPlacement="outside" className="max-w-xs" disableSelectorIconRotation>
          {options.map((option) => (
            <SelectItem key={option.key}>{option.label}</SelectItem>
          ))}
        </Select>
      </div>

      <div className="w-full mx-3 rounded-md !bg-white ">
        <h1 className="font-sans font-medium text-dark text-2xl ">Cash Machine</h1>
        <Select placeholder="Enter Type" labelPlacement="outside" className="max-w-xs" disableSelectorIconRotation>
          {options.map((option) => (
            <SelectItem key={option.key}>{option.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};
