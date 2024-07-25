import { Input } from "@nextui-org/react"
import { CustomInput } from "../CustomInput"

interface CustomInputNumberProps {
    name: string;
    placeholder: string;
}

export const NumberInput: React.FC<CustomInputNumberProps> = ({
  name,placeholder
}: CustomInputNumberProps) => {

  return (
    <CustomInput name={name}>
    <Input
      radius="sm"
      size="lg"
      type="number"
      placeholder={placeholder}
      labelPlacement="outside"
      className="placeholder:font-bold placeholder:text-gray"
    />
  </CustomInput>
  )
}
