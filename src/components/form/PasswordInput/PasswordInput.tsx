import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../types/translationTypes";

export default function PasswordInput() {
  const { password, vialedPassword } = useSelector((state: RootState) => state.translation.words);
  const [passwordValue, setPasswordValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validatePassword = (password: string) => {
    const regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/? ]*$/;
    return regex.test(password);
  };

  const handleChange = (e: { target: { value: string; }; }) => {
    const value = e.target.value;
    if (validatePassword(value)) {
      setPasswordValue(value);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold text-secondary text-sm" htmlFor="password">
        {password}
      </label>
      <input
        type="password"
        placeholder="password"
        name="password"
        id="password"
        value={passwordValue}
        onChange={handleChange}
        className={`border border-solid rounded-md p-1 text-sm ${isValid ? 'border-[#eaeaf1]' : 'border-red-500'
          }`}
      />
      {!isValid && (
        <span className="text-red-500 text-sm">
          {vialedPassword}
        </span>
      )}
    </div>
  );
}
