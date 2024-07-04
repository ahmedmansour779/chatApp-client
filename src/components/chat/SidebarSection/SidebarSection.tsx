import { useState } from "react";
import { Socket } from "socket.io-client";
import ItemsSidebar from "../ItemsSidebar";
import SidebarDetailsSection from "../SidebarDetailsSection";

export default function SidebarSection({ socketConnection }: { socketConnection: Socket | null }) {
  const [itemId, setItemId] = useState<number>(1)

  Object.keys({}).length

  return (
    <div className="col-span-4 grid grid-cols-12">
      <ItemsSidebar itemId={itemId} setItemId={setItemId} />
      <SidebarDetailsSection socketConnection={socketConnection} itemId={itemId} />
    </div>
  );
}
