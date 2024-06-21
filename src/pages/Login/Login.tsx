import { useSelector } from "react-redux";
import SideBarLogin from "../../components/SideBarLogin";
import LoginForm from "../../components/login/LoginForm";
import { RootState } from "../../types/translationTypes";

export default function Login() {
  const lang = useSelector((state: RootState) => state.translation.language)

  return (
    <div
      style={{
        direction: lang == "en" ? "rtl" : "ltr"
      }}
      className="min-h-[100vh] font-cairo bg-primary p-4 relative tablet:block flex flex-col gap-4">
      <SideBarLogin />
      <LoginForm />
    </div>
  );
}
