import { useSelector } from "react-redux";
import { RootState } from "../../../types/translationTypes";
import MsgCopyRightComponent from "../../MsgCopyRightComponent";
import EmailInput from "../../form/EmailInput";
import PasswordInput from "../../form/PasswordInput";
import SubmitButton from "../../form/SubmitButton";
import MsgSubmitButton from "../MsgSubmitButton";

export default function LoginFormData() {
  const { login } = useSelector((state: RootState) => state.translation.words)
  return (
    <>
      <form className="flex flex-col gap-2">
        <EmailInput />
        <PasswordInput />
        <div className="w-full flex flex-col gap-1 pt-6">
          <SubmitButton title={login} />
          <MsgSubmitButton />
        </div>
      </form>
      <MsgCopyRightComponent />
    </>
  );
}
