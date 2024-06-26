import { useSelector } from "react-redux";
import ChatSection from "../../components/chat/ChatSection";
import SidebarSection from "../../components/chat/SidebarSection";
import { RootState } from "../../types/translationTypes";

export default function Chat() {
  const lang = useSelector((state: RootState) => state.translation.language)

  return (
    <div
      style={{
        direction: lang == "ar" ? "rtl" : "ltr"
      }}
      className="grid grid-cols-12">
      <SidebarSection />
      <ChatSection />
    </div>
  );
}
