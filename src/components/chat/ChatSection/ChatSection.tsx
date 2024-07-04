import { useSelector } from "react-redux";
import { RootState } from "../../../types/translationTypes";
import ChatUser from "../ChatUser";
import InitialChatPage from "../InitialChatPage";


export default function ChatSection() {
  const chatId = useSelector((state: RootState) => state.user.chatId)

  return (
    <div className="col-span-8">
      {
        chatId == "" ?
          <InitialChatPage /> :
          <ChatUser />
      }
    </div>
  );
}
