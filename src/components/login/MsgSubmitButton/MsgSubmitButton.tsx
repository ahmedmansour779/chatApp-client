import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../types/translationTypes";

export default function MsgSubmitButton() {
  const { doHaveAccount, register } = useSelector((state: RootState) => state.translation.words)

  return (
    <div className="flex gap-1 text-xs text-lightBlack">
      <p>
        {doHaveAccount}
      </p>
      <Link to="/register" className="text-primary underline font-semibold">
        {register}
      </Link>
    </div>
  );
}
