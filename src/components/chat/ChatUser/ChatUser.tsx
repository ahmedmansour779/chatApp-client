import { useSelector } from "react-redux";
import backGroundSrc from "../../../shared/images/background.png";
import { RootState } from "../../../types/translationTypes";

export default function ChatUser() {
  const { chatId } = useSelector((state: RootState) => state.user)
  const { backgroundInitialChatPage } = useSelector((state: RootState) => state.theme.colors)
  // const [dataUser, setDataUser] = useState()

  // useEffect(() => {
  //   if (socketConnection) {
  //     socketConnection.emit('message-page', chatId)

  //     socketConnection.emit('seen', chatId)

  //     socketConnection.on('message-user', (data) => {
  //       setDataUser(data)
  //       console.log(data)
  //     })

  //     console.log(socketConnection)

  //     socketConnection.on('message', (data) => {
  //       console.log('message data', data)
  //       // setAllMessage(data)
  //     })
  //   }
  // }, [chatId, socketConnection])

  // console.log(dataUser);


  return (
    <div
      style={{
        backgroundImage: `url(${backGroundSrc})`,
        backgroundColor: backgroundInitialChatPage,

      }}
      className="w-full h-full transition-all ease-in-out delay-300">
      {chatId}
    </div>
  )
}
