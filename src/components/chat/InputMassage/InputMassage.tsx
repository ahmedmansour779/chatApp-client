import { IconSend2 } from "@tabler/icons-react";
import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { Socket } from "socket.io-client";
import { massageSend } from "../../../types/chatsType";
import { RootState } from "../../../types/translationTypes";
import InputFilles from "./InputFilles";
import InputTextMassage from "./InputTextMassage";

export type InputMassageProps = {
  socketConnection: Socket | null
};

export default function InputMassage({ socketConnection }: InputMassageProps) {
  const { chatId, _id } = useSelector((state: RootState) => state.user)
  const [open, setOpen] = useState<boolean>(false)
  const [uploadPhoto, setUploadPhoto] = useState<boolean>(false)
  const [uploadVideo, setUploadVideo] = useState<boolean>(false)
  const [message, setMessage] = useState<massageSend>({
    text: "",
    imageUrl: "",
    videoUrl: ""
  })

  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.text || message.imageUrl || message.videoUrl) {
      if (socketConnection) {
        socketConnection.emit('new message', {
          sender: _id,
          receiver: chatId,
          text: message.text,
          imageUrl: message.imageUrl,
          videoUrl: message.videoUrl,
          msgByUserId: _id
        })
        setMessage({
          text: "",
          imageUrl: "",
          videoUrl: ""
        })
        setOpen(false)
        setUploadPhoto(false)
        setUploadVideo(false)
      }
    }
  }

  return (
    <form
      style={{
        backdropFilter: "blur(7px)"
      }}
      onSubmit={(e) => handelSubmit(e)}
      className="h-[57px] px-2 py-4 flex items-center gap-2  w-full border-t-[1px] border-solid border-gray-200 "
    >
      <InputFilles
        massage={message}
        setMassage={setMessage}
        open={open}
        setOpen={setOpen}
        setUploadPhoto={setUploadPhoto}
        setUploadVideo={setUploadVideo}
        uploadPhoto={uploadPhoto}
        uploadVideo={uploadVideo} />
      <InputTextMassage setMassage={setMessage} massage={message} />
      <button
        type="submit"
        className="bg-primary text-white p-1 rounded-sm"
      >
        <IconSend2 size={16} />
      </button>
    </form>
  );
}
