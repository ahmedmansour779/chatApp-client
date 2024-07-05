import { IconX } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { setChatId } from "../../../redux/auth/userSlice";
import { RootState } from "../../../types/translationTypes";

export type HeaderChatProps = {
  image?: string,
  name?: string,
  state?: boolean
};
export default function HeaderChat({ image, name, state }: HeaderChatProps) {
  const { activeUser, notActiveUser } = useSelector((state: RootState) => state.translation.words)
  const { textInitialChatPage, descriptionInitialChatPage } = useSelector((state: RootState) => state.theme.colors)
  const dispatch = useDispatch()

  return (
    <div style={{
      backdropFilter: "blur(7px)"
    }} className="w-full h-14 bg-[#ffffff0d] flex justify-between items-center p-2">
      <div className="flex items-center gap-2">
        <img
          className="w-8 h-8 rounded-full"
          src={image} alt={name} />
        <div>
          <p style={{ color: textInitialChatPage }} className="transition duration-300 ease-in-out">
            {name}
          </p>
          <p style={{ color: descriptionInitialChatPage }} className="text-xs transition duration-300 ease-in-out">
            {state ? activeUser : notActiveUser}
          </p>
        </div>
      </div>
      <div
        onClick={() => dispatch(setChatId(""))}
        style={{ color: textInitialChatPage }}
        className="hover:cursor-pointer">
        <IconX />
      </div>
    </div>
  );
}
