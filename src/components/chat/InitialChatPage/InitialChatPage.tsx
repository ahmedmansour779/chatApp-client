import { IconMessageFilled } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import backGroundSrc from "../../../shared/images/background.png";
import { RootState } from "../../../types/translationTypes";

export default function InitialChatPage() {
  const { backgroundInitialChatPage, textInitialChatPage, descriptionInitialChatPage } = useSelector((state: RootState) => state.theme.colors)
  const { welcomeDoot, msgWelcomeDoot } = useSelector((state: RootState) => state.translation.words)
  return (
    <div
      style={{
        backgroundImage: `url(${backGroundSrc})`,
        backgroundColor: backgroundInitialChatPage,

      }}
      className="w-full h-full flex justify-center items-center transition-all ease-in-out delay-300">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="bg-primary bg-opacity-20 rounded-full p-4 inline-block text-primary">
          <IconMessageFilled size={35} />
        </div>
        <p style={{ color: textInitialChatPage }} className="text-xl pt-2 transition-all ease-in-out delay-300">
          {welcomeDoot}
        </p>
        <p style={{ color: descriptionInitialChatPage }} className="text-sm w-3/4 text-center transition-all ease-in-out delay-300">
          {msgWelcomeDoot}
        </p>
      </div>
    </div>
  );
}
