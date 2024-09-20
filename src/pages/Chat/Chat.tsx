import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatSection from "../../components/chat/ChatSection";
import SidebarSection from "../../components/chat/SidebarSection";
import { fetchUserDetails } from "../../functions/fetchUserDetail";
import { SocketProvider, useSocket } from "../../functions/SocketProvider";
import { setOnlineUser, setUser } from "../../redux/auth/userSlice";
import { RootState } from "../../types/translationTypes";

export default function Chat() {
  const lang = useSelector((state: RootState) => state.translation.language);
  const dispatch = useDispatch();
  const socket = useSocket();

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

  useEffect(() => {
    if (socket) {
      socket.on("onlineUser", (data) => {
        dispatch(setOnlineUser(data));
      });
    }

    return () => {
      if (socket) {
        socket.off("onlineUser");
      }
    };
  }, [socket, dispatch]);

  return (
    <SocketProvider>
      <div
        style={{
          direction: lang === "ar" ? "rtl" : "ltr",
        }}
        className="tablet:grid tablet:grid-cols-12 h-lvh"
      >
        <SidebarSection />
        <ChatSection />
      </div>
    </SocketProvider>
  );
}
