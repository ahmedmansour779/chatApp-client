import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../types/translationTypes";

export default function MsgSubmitButton() {
  const { alreadyHaveAccount, login } = useSelector((state: RootState) => state.translation.words)

  return (
    <div className="flex gap-1 text-xs justify-center text-lightBlack">
      <p>
        {alreadyHaveAccount}
      </p>
      <Link to="/" className="text-primary underline font-semibold">
        {login}
      </Link>
    </div>
  );
}
