import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { handelRegister } from "../../../functions/registerData.tsx";
import { RootState } from "../../../types/translationTypes";
import MsgCopyRightComponent from "../../MsgCopyRightComponent";
import EmailInput from "../../form/EmailInput";
import PasswordInput from "../../form/PasswordInput";
import SubmitButton from "../../form/SubmitButton";
import TermsConditionsCheckBox from "../../form/TermsConditionsCheckBox";
import UpLoadImage from "../../form/UpLoadImage/index.ts";
import UserNameInput from "../../form/UserNameInput";
import MsgSubmitButton from "../MsgSubmitButton";

export default function RegisterFormData() {
  const { register, dataIncomplete: msgErrorData, alreadyUserAccount } = useSelector((state: RootState) => state.translation.words)
  const [value, setValue] = useState<string>("")
  const [available, setAvailable] = useState<boolean>(false)
  const link = useNavigate()

  return (
    <>
      <form
        onSubmit={e => handelRegister({ e, available, value, msgErrorData, alreadyUserAccount, link })}
        className="flex flex-col gap-2">
        <UserNameInput />
        <EmailInput />
        <PasswordInput />
        <ToastContainer />
        <TermsConditionsCheckBox setAvailable={setAvailable} available={available} />
        <UpLoadImage setValue={setValue} />
        <div className="w-full flex flex-col gap-1 pt-6">
          <SubmitButton title={register} />
          <MsgSubmitButton />
        </div>
      </form>
      <MsgCopyRightComponent />
    </>
  );
}
