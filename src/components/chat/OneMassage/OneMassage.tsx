import { useSelector } from "react-redux";
import { RootState } from "../../../types/translationTypes";

export type OneMassageProps = {
  imageUrl: string
  msgByUserId: string
  seen?: boolean
  text: string
  videoUrl: string
};
export default function OneMassage({ msgByUserId, text, imageUrl, videoUrl }: OneMassageProps) {
  const { _id } = useSelector((state: RootState) => state.user)
  const { backGroundMassageFiend, textInitialChatPage } = useSelector((state: RootState) => state.theme.colors)
  return (
    <div
      className="flex"
      style={{
        justifyContent: msgByUserId == _id ? "start" : "end"
      }}
    >
      <div
        style={{
          background: msgByUserId == _id ? "#4eac6d3b" : backGroundMassageFiend,
          color: textInitialChatPage
        }}
        className="w-fit p-2 rounded text-xs transition ease-in-out duration-300">
        {
          imageUrl !== "" &&
          <img src={imageUrl} />
        }
        {
          videoUrl !== "" &&
          <video src={videoUrl} />
        }
        {
          text !== "" &&
          <p>
            {text}
          </p>
        }
      </div>
    </div>
  );
}
