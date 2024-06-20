import { useSelector } from "react-redux";
import WelcomeTitle from "../../../pages/Login/WelcomeTitle";
import { RootState } from "../../../types/translationTypes";
import LoginFormData from "../LoginFormData";

export default function LoginForm() {
  const lang = useSelector((state: RootState) => state.translation.language)
  return (
    <div
      style={{
        direction: lang == "ar" ? "rtl" : "ltr"
      }}
      className="bg-white tablet:w-2/3 p-2 rounded-lg flex justify-center items-center tablet:min-h-[94vh] min-h-[87vh] flex-col gap-12 relative">
      <WelcomeTitle />
      <LoginFormData />
    </div>
  );
}
