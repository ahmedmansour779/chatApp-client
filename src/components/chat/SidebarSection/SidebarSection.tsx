import { useState } from "react";
import ItemsSidebar from "../ItemsSidebar";
import SidebarDetailsSection from "../SidebarDetailsSection";

export default function SidebarSection() {
  const [itemId, setItemId] = useState<number>(1)

  return (
    <div className="col-span-4 grid grid-cols-8">
      <ItemsSidebar itemId={itemId} setItemId={setItemId} />
      <SidebarDetailsSection itemId={itemId} />
    </div>
  );
}
