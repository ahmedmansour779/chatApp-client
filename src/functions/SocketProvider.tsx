import React, { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { api } from "../api";

// Create the Socket context
const SocketContext = createContext<Socket | null>(null);

export const useSocket = () => useContext(SocketContext);

// Socket provider component
export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketConnection: Socket = io(`${api}`, {
      auth: {
        token: localStorage.getItem("token"),
      },
    });

    setSocket(socketConnection);

    return () => {
      // Cleanup socket connection when the component unmounts
      socketConnection.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
