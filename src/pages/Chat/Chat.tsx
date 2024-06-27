import { useState } from "react";
import { useSelector } from "react-redux";
import ChatSection from "../../components/chat/ChatSection";
import SidebarSection from "../../components/chat/SidebarSection";
import { RootState } from "../../types/translationTypes";

export default function Chat() {
  const lang = useSelector((state: RootState) => state.translation.language)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chatId, setChatId] = useState<number>(0)

  return (
    <div
      style={{
        direction: lang == "ar" ? "rtl" : "ltr"
      }}
      className="grid grid-cols-12">
      <SidebarSection />
      <ChatSection chatId={chatId} />
    </div>
  );
}
