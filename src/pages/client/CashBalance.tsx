import { Card, Input, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, colors } from "@nextui-org/react";

export const CashBalancePage = () => {
  return (
    <div className="flex w-full p-6 gap-4 min-h-[90%]">
        <Card className="w-1/4 space-y-4 p-4" style={{
        background:"#ffffff",
      }}>
          <CardBody className="space-y-4"
          style={
            {
              background: "#ffffff"
            }
          }><Input placeholder="Search" className="flex justify-center"/>
            {["","",""].map((item) => (
            <Card key={item} style={
              {
                background: "#202020"
              }
            }>
              <CardBody>
              <p style={
              {
                color: "#ffffff",
                fontWeight: "700"
              }
            }>Branch De Moda Outlet</p>
            <small style={
              {
                color: "#BEBEBE"
              }
            }>Calle 15 # 56-27</small>

            <p style={
              {
                color: "#FF9500"
              }
            }>Medellin</p>
              </CardBody>
            </Card>
          ))}
        
            
          </CardBody>
        </Card>
      
 
 
      <Card className="w-1/4 space-y-4 p-4" style={{
        background:"#ffffff",
      }}>
        <CardBody className="space-y-4">
          <Input placeholder="Search"  />
          {['CM-001', 'CM-002', 'CM-003', 'CM-004'].map((item) => (
            <Card key={item}>
              <CardBody>
                <p style={
              {
                fontWeight: "700"
              }
            }>{item}</p>
                <p style={
              {
                color: "#FF9500",
                fontWeight: "700"
              }
            }>$5,000,000</p>
              </CardBody>
            </Card>
          ))}
          </CardBody>
        </Card>

     
  
      <div className="flex flex-1 flex-col space-y-4 ">
          <div className="w-1/2 h-40 border flex items-center justify-center">
            <p>Graphic</p>
          </div>
          <div className="h-full">
          <Table
          className="h-full"
            aria-label="Example table with static content"
            
          >
            <TableHeader >
              <TableColumn 
              className="bg-[#FF9500] text-[#ffffff]"
            >BASE</TableColumn>
              <TableColumn className="bg-[#FF9500] text-[#ffffff]">INITIAL</TableColumn>
              <TableColumn className="bg-[#FF9500] text-[#ffffff]">FINAL</TableColumn>
              <TableColumn className="bg-[#FF9500] text-[#ffffff]">DATE</TableColumn>
              <TableColumn className="bg-[#FF9500] text-[#ffffff]">EDIT</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>$30,000</TableCell>
                <TableCell>$30,000</TableCell>
                <TableCell>$30,000</TableCell>
                <TableCell>01/01/2024</TableCell>
                <TableCell>
                  <button className="text-blue-500">Edit</button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </div>
        </div>
    </div>
  );
  
}
