import { useSelector } from "react-redux";
import { RootState } from "../../../types/translationTypes";

export default function WelcomeTitle() {
  const { registerAccount, msgRegisterAccount } = useSelector((state: RootState) => state.translation.words)
  return (
    <div className="flex flex-col gap-2 items-center">
      <p className="text-xl font-semibold">
        {registerAccount}
      </p>
      <p className="text-xs text-lightBlack">
        {msgRegisterAccount}
      </p>
    </div>
  );
}
