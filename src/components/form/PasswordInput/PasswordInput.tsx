import { useSelector } from "react-redux";
import { RootState } from "../../../types/translationTypes";

export default function PasswordInput() {
  const { password } = useSelector((state: RootState) => state.translation.words)
  return (
    <div className="flex flex-col gap-1">
      <div>
        <label
          className="font-semibold text-secondary text-sm"
          htmlFor="password">
          {password}
        </label>
      </div>
      <input
        type="password"
        placeholder="password"
        name="password"
        id="password"
        className="border border-solid border-[#eaeaf1] rounded-md p-1 text-sm"
      />
    </div>
  );
}
