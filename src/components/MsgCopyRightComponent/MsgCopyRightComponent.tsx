import { IconCopyright, IconHeartFilled } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { RootState } from "../../types/translationTypes";

export default function MsgCopyRightComponent() {
  const { msgCopyRight } = useSelector((state: RootState) => state.translation.words)
  const currentYear = new Date().getFullYear()
  return (
    <div className="absolute bottom-4 flex text-lightBlack gap-1 items-center text-xs">
      <IconCopyright size={15} /> {currentYear + " " + msgCopyRight} < IconHeartFilled color="red" size={15} />
    </div>
  );
}
