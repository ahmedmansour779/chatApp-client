import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../types/translationTypes";

export default function EmailInput() {
  const { email, vialedEmail } = useSelector((state: RootState) => state.translation.words);
  const [emailValue, setEmailValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleChange = (e: { target: { value: string; }; }) => {
    const value = e.target.value;
    setEmailValue(value);
    setIsValid(validateEmail(value));
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold text-secondary text-sm" htmlFor="email">
        {email}
      </label>
      <input
        type="email"
        placeholder="example@mail.com"
        name="email"
        id="email"
        value={emailValue}
        onChange={handleChange}
        className={`border border-solid rounded-md p-1 text-sm ${isValid ? 'border-[#eaeaf1]' : 'border-red-500'
          }`}
      />
      {!isValid && (
        <span className="text-red-500 text-sm">
          {vialedEmail}
        </span>
      )}
    </div>
  );
}
