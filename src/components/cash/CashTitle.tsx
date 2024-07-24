interface CashTitleProps { 
  title: string;
  subtitle: string;
  children: React.ReactNode;

}
export const CashTitle = ({ children, title, subtitle }:CashTitleProps) => {
  return (
    <div className="tituloyicon flex">
      <div className="iconCash mr-5">
        {children}
     
      </div>
      <div className="cashRegisterTitle">
        <h1 className="font-sans font-semibold text-dark text-5xl ">{title} {/* Cash Register*/}</h1> 
        <h2 className="font-sans font-normal text-dark text-base mx-2 my-2">
          {subtitle}{/* Set your daily cash balance, let’s work! */}
        </h2>
      </div>
    </div>
  );
}
