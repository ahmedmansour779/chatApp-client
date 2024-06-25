import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { handelLogin } from "../../../functions/handelLogin";
import { RootState } from "../../../types/translationTypes";
import MsgCopyRightComponent from "../../MsgCopyRightComponent";
import EmailInput from "../../form/EmailInput";
import PasswordInput from "../../form/PasswordInput";
import SubmitButton from "../../form/SubmitButton";
import MsgSubmitButton from "../MsgSubmitButton";

export default function LoginFormData() {
  const { login, dataIncomplete: msgErrorData, EmailNotCorrect, PasswordNotCorrect } = useSelector((state: RootState) => state.translation.words)
  const link = useNavigate()
  const dispatch = useDispatch()
  return (
    <>
      <form
        onSubmit={(e) => handelLogin({ e, msgErrorData, EmailNotCorrect, PasswordNotCorrect, link, dispatch })}
        className="flex flex-col gap-2">
        <EmailInput />
        <PasswordInput />
        <ToastContainer />
        <div className="w-full flex flex-col gap-1 pt-6">
          <SubmitButton title={login} />
          <MsgSubmitButton />
        </div>
      </form>
      <MsgCopyRightComponent />
    </>
  );
}
