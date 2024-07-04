import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Socket, io } from "socket.io-client";
import ChatSection from "../../components/chat/ChatSection";
import SidebarSection from "../../components/chat/SidebarSection";
import { fetchUserDetails } from "../../functions/fetchUserDetail";
import { setOnlineUser, setUser } from "../../redux/auth/userSlice";
import { RootState } from "../../types/translationTypes";

export default function Chat() {
  const lang = useSelector((state: RootState) => state.translation.language);
  // const chatId = useSelector((state: RootState) => state.user.chatId);
  const dispatch = useDispatch();
  const [socketConnect, setSocketConnect] = useState<null | Socket>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchUserDetails();
        dispatch(setUser(response.data));
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    }
    fetchData();
  }, [dispatch]);

  // let socketConnection = null

  useEffect(() => {
    const socketConnection: Socket = io("http://localhost:8080", {
      auth: {
        token: localStorage.getItem("token"),
      },
    });
    setSocketConnect(socketConnection)

    socketConnection.on("onlineUser", (data) => {
      dispatch(setOnlineUser(data));
      console.log(data);
    });

    // socketConnection.emit("message-page", chatId);
    // socketConnection.emit("seen", chatId);

    // socketConnection.on("message-user", (data) => {
    //   console.log(data);
    // });

    // socketConnection.on("message", (data) => {
    //   console.log("message data", data);
    // });

    // return () => {
    //   socketConnection.disconnect();
    // };
  }, [dispatch]);

  return (
    <div
      style={{
        direction: lang === "ar" ? "rtl" : "ltr",
      }}
      className="grid grid-cols-12"
    >
      <SidebarSection socketConnection={socketConnect} />
      <ChatSection />
    </div>
  );
}
