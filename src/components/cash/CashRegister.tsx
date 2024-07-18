import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

export const CashRegister = () => {
  const [isEnable, setIsEnable] = useState(true);


  useEffect(() => {
    console.log("hola");
  }, [isEnable]);



  return (
    <section className="p-10">
      <div className="h-[200px] w-[100px] bg-red-500 rounded-lg flex flex-col gap-10 p-4 items-center justify-center">
        <Button onClick={() => setIsEnable(!isEnable)} className="bg-yellow-200">
          open
        </Button>

        <Button isDisabled={isEnable} className="bg-yellow-200">
          close
        </Button>
      </div>
    </section>
  );
};
