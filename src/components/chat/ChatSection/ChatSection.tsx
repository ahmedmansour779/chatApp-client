import { useSelector } from "react-redux";
import { Socket } from "socket.io-client";
import { RootState } from "../../../types/translationTypes";
import ChatUser from "../ChatUser";
import InitialChatPage from "../InitialChatPage";


export default function ChatSection({ socketConnection }: { socketConnection: Socket | null }) {
  const chatId = useSelector((state: RootState) => state.user.chatId)

  return (
    <div
      className={`tablet:col-span-8 tablet:block ${chatId == "" ? "hidden" : "block"}`}>
      {
        chatId == "" ?
          <InitialChatPage /> :
          <ChatUser socketConnection={socketConnection} />
      }
    </div>
  );
}
