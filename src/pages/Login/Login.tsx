import { useSelector } from "react-redux";
import { RootState } from "../../types/translationTypes";

export default function Login() {
  const test = useSelector((state: RootState) => state.theme.colors.primary)
  console.log(test);

  return (
    <>
      <h1 className="text-3xl">Login</h1>
    </>
  );
}
