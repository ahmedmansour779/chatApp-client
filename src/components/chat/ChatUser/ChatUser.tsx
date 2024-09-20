import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSocket } from "../../../functions/SocketProvider";
import backGroundSrc from "../../../shared/images/background.png";
import { allMassage, userChat } from "../../../types/chatsType";
import { RootState } from "../../../types/translationTypes";
import HeaderChat from "../HeaderChat";
import InputMassage from "../InputMassage";
import OneMassage from "../OneMassage";

export default function ChatUser() {
  const { chatId } = useSelector((state: RootState) => state.user)
  const { backgroundInitialChatPage } = useSelector((state: RootState) => state.theme.colors)
  const [dataUser, setDataUser] = useState<userChat>()
  const [allMassages, setAllMassages] = useState<allMassage>([])
  const socketConnection = useSocket()

  useEffect(() => {
    if (socketConnection) {
      socketConnection.emit('message-page', chatId)
      socketConnection.emit('seen', chatId)

      socketConnection.on('message-user', (data) => {
        setDataUser(data)
      })
      socketConnection.on('message', (data: allMassage) => {
        setAllMassages(data)
      })
    }
  }, [chatId, socketConnection])

  console.log(allMassages);
  return (
    <div
      style={{
        backgroundImage: `url(${backGroundSrc})`,
        backgroundColor: backgroundInitialChatPage,
      }}
      className="w-full h-lvh overflow-hidden flex flex-col justify-between transition-all ease-in-out delay-300">
      <div
        style={{
          height: "calc(100% - 57px)"
        }}
        className="overflow-hidden"
      >
        <HeaderChat name={dataUser?.name} image={dataUser?.profile_pic} state={dataUser?.online} />
        <div
          style={{
            height: "calc(100% - 56px)"
          }}
          className="flex flex-col gap-2 px-2 overflow-scroll" dir="rtl">
          {
            allMassages.map(({ text, imageUrl, seen, msgByUserId, videoUrl }, index) => {
              return (
                <OneMassage msgByUserId={msgByUserId} seen={seen} imageUrl={imageUrl} videoUrl={videoUrl} key={index} text={text} />
              )
            })
          }
        </div>
      </div>
      <InputMassage socketConnection={socketConnection} />
    </div>
  )
}
