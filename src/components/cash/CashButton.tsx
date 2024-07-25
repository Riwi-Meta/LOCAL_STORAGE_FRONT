import { Button } from "@nextui-org/react";
import { useState } from "react";

// interface CashButtonProps {
//   state: string;
// }

export const CashButton = () => {
  const [stateBut, SettateBut] = useState("open");

  // useEffect(() => {
  //   SettateBut(state);
  // }, [state]);

  const handleButtonClick = () => {
    if (stateBut === "open") {
      SettateBut("close");
    } else if (stateBut === "close") {
      SettateBut("save");
    } else if (stateBut === "save") {
      SettateBut("open");
    }
  };

  let classButton = "bg-orange font-bold";

  if (stateBut === "open") {
    classButton = "open bg-orange font-bold";
  } else if (stateBut === "close") {
    classButton = "close bg-dark  text-white font-bold";
  } else if (stateBut === "save") {
    classButton = "save bg-orange font-bold";
  }

  return (
    <Button className={classButton} onClick={handleButtonClick}>
      {stateBut}
    </Button>
  );
};
