import { Card, CardHeader, CardBody, } from "@nextui-org/react";

export default function CashNotes() {
  return (
    <Card className="max-w-[400px] shadow-xl pl-3">
      <CardHeader className="flex gap-3 ">
        <div className="flex flex-col">
          <p className="text-small text-default-500">23/07/2024</p>
          <p className="text-2xl font-semibold">Previous Notes</p>
        </div>
      </CardHeader>

      <CardBody>
        <p>Your previous notes about this cash register. Watch more details clicking this btn.</p>
      </CardBody>

    </Card>
  );
}
