import { useState } from "react";
import { useSelector } from "react-redux";
import { Socket } from "socket.io-client";
import { RootState } from "../../../types/translationTypes";
import ItemsSidebar from "../ItemsSidebar";
import SidebarDetailsSection from "../SidebarDetailsSection";

export default function SidebarSection({ socketConnection }: { socketConnection: Socket | null }) {
  const [itemId, setItemId] = useState<number>(1)
  const { chatId } = useSelector((state: RootState) => state.user)

  return (
    <div
      className={`h-full tablet:col-span-4 tablet:grid tablet:grid-cols-12 ${chatId == "" ? "grid" : "hidden"} grid-rows-12 tablet:grid-rows-1`}>
      <ItemsSidebar itemId={itemId} setItemId={setItemId} />
      <SidebarDetailsSection socketConnection={socketConnection} itemId={itemId} />
    </div>
  );
}
