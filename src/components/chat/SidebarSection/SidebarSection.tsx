import { useState } from "react";
import ItemsSidebar from "../ItemsSidebar";
import SidebarDetailsSection from "../SidebarDetailsSection";

export default function SidebarSection() {
  const [itemId, setItemId] = useState<number>(1)

  Object.keys({}).length

  return (
    <div className="col-span-4 grid grid-cols-12">
      <ItemsSidebar itemId={itemId} setItemId={setItemId} />
      <SidebarDetailsSection itemId={itemId} />
    </div>
  );
}
