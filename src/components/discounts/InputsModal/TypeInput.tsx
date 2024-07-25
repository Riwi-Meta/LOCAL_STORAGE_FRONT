import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { CustomInput } from "../CustomInput";

interface CustomInputTypeProps {
  name: string;
  placeholder: string;
}

export const TypeInput: React.FC<CustomInputTypeProps> = ({
  name,
  placeholder,
}: CustomInputTypeProps) => {
  return (
    <CustomInput name={name}>
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
          <Button size="lg" className="bg-casiWhite text-gray font-semibold">
            {placeholder}
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem>Active</DropdownItem>
          <DropdownItem>Inactive</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </CustomInput>
  );
};
