import React, { ReactNode } from 'react';

interface CustomInputProps {
  children: ReactNode;
  name: string;
  [key: string]: any;
}

export const CustomInput: React.FC<CustomInputProps> = ({ children, name}: CustomInputProps) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-bold text-subtitleBlack text-xl">{name}</p>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        {children}
      </div>
    </div>
  );
};
