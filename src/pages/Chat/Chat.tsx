import { useSelector } from "react-redux";
import ChatSection from "../../components/chat/ChatSection";
import SidebarSection from "../../components/chat/SidebarSection";
import { RootState } from "../../types/translationTypes";

export default function Chat() {
  const state = useSelector((state: RootState) => state.user.token)
  console.log(state);

  return (
    <div className="grid grid-cols-12">
      <SidebarSection />
      <ChatSection />
    </div>
  );
}
