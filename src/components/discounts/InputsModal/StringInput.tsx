import { Input } from "@nextui-org/react";
import { CustomInput } from "../CustomInput";

interface CustomInputStringProps {
  name: string;
  placeholder: string;
}

export const StringInput: React.FC<CustomInputStringProps> = ({
  name,placeholder
}: CustomInputStringProps) => {
  return (
    <CustomInput name={name}>
      <Input
        size="sm"
        type="string"
        label={<label className="text-gray font-semibold">{placeholder}</label>}
      />
    </CustomInput>
  );
};
