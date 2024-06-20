import { useSelector } from "react-redux";
import { RootState } from "../../../types/translationTypes";

export default function WelcomeTitle() {
  const { welcome, msgSignIn } = useSelector((state: RootState) => state.translation.words)
  return (
    <div className="flex flex-col gap-2 items-center">
      <p className="text-xl">
        {welcome}
      </p>
      <p className="text-xs text-lightBlack">
        {msgSignIn}
      </p>
    </div>
  );
}
