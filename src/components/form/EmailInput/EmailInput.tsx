import { useSelector } from "react-redux";
import { RootState } from "../../../types/translationTypes";

export default function EmailInput() {
  const { email } = useSelector((state: RootState) => state.translation.words)
  return (
    <div className="flex flex-col gap-1">
      <label
        className="font-semibold text-secondary text-sm"
        htmlFor="email">
        {email}
      </label>
      <input
        type="email"
        placeholder="example@mail.com"
        name="email"
        id="email"
        className="border border-solid border-[#eaeaf1] rounded-md p-1 text-sm"
      />
    </div>
  );
}
