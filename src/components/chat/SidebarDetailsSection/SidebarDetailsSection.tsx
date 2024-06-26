import ChatsSection from "../ChatsSection";
import ProfileSection from "../ProfileSection";

interface SidebarDetailsSectionProps {
  itemId: number
}

export default function SidebarDetailsSection({ itemId }: SidebarDetailsSectionProps) {

  return (
    <>
      {
        itemId == 1 ? <ProfileSection /> :
          itemId == 2 ? <ChatsSection /> :
            null
      }
    </>

  );
}
