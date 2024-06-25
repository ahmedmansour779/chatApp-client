import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../types/translationTypes";

export default function UserNameInput() {
  const { userName, vialedUserName } = useSelector((state: RootState) => state.translation.words);
  const [nameValue, setNameValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateName = (name: string) => {
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(name);
  };

  const handleChange = (e: { target: { value: string; }; }) => {
    const value = e.target.value;
    if (validateName(value)) {
      setNameValue(value);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold text-secondary text-sm" htmlFor="name">
        {userName}
      </label>
      <input
        type="text"
        placeholder="Ahmed Mansour"
        name="name"
        id="name"
        value={nameValue}
        onChange={handleChange}
        className={`border border-solid rounded-md p-1 text-sm ${isValid ? 'border-[#eaeaf1]' : 'border-red-500'
          }`}
      />
      {!isValid && (
        <span className="text-red-500 text-sm">
          {vialedUserName}
        </span>
      )}
    </div>
  );
}
