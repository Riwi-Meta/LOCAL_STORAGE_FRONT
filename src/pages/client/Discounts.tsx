import { DiscounstAdmin } from "../../components/discounts/DiscounstAdmin";
import { DiscountsEmployee } from "../../components/discounts/DiscountsEmployee";

export const DiscountsPage = () => {
  const isClient = false;

  return <div>{isClient ? <DiscountsEmployee /> : <DiscounstAdmin />}</div>;
};
