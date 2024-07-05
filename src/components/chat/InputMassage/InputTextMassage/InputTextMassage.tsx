import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { massageSend } from "../../../../types/chatsType";
import { RootState } from "../../../../types/translationTypes";

type InputTextMassageProps = {
  setMassage: Dispatch<SetStateAction<massageSend>>
  massage: massageSend
};

export default function InputTextMassage({ setMassage, massage }: InputTextMassageProps) {
  const { placeHolderMassageInput } = useSelector((state: RootState) => state.translation.words)
  const { backgroundSidebar, textSidebar } = useSelector((state: RootState) => state.theme.colors)

  return (
    <input
      style={{
        outline: "none",
        backgroundColor: backgroundSidebar,
        color: textSidebar
      }}
      onChange={(e) => setMassage({
        ...massage,
        text: e.target.value
      })}
      type="text"
      value={massage.text}
      placeholder={placeHolderMassageInput}
      className="w-full px-2 py-1 text-xs rounded" />
  );
}
