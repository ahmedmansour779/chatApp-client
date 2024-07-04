import { Socket } from "socket.io-client";
import ChatsSection from "../ChatsSection";
import ProfileSection from "../ProfileSection";

interface SidebarDetailsSectionProps {
  itemId: number,
  socketConnection: Socket | null
}

export default function SidebarDetailsSection({ itemId, socketConnection }: SidebarDetailsSectionProps) {
  return (
    <>
      {
        itemId == 1 ? <ProfileSection /> :
          itemId == 2 ? <ChatsSection socketConnection={socketConnection} /> :
            null
      }
    </>

  );
}
