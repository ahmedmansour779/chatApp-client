import InitialChatPage from "../InitialChatPage";

interface chatSectionProps {
  chatId: number
}

export default function ChatSection({ chatId }: chatSectionProps) {
  return (
    <div className="col-span-8">
      {
        chatId == 0 ?
          <InitialChatPage /> :
          <p>chat</p>
      }
    </div>
  );
}
