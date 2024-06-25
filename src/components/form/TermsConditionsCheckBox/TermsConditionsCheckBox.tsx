import React, { SetStateAction } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../types/translationTypes";

interface TermsConditionsCheckBoxProps {
  setAvailable: React.Dispatch<SetStateAction<boolean>>,
  available: boolean
}

export default function TermsConditionsCheckBox({ available, setAvailable }: TermsConditionsCheckBoxProps) {
  const { terms } = useSelector((state: RootState) => state.translation.words)
  return (
    <div className="text-xs text-lightBlack flex gap-1">
      <input
        onChange={() => setAvailable(!available)}
        type="checkbox"
        name="termsCondition"
        id="termsCondition"
        className="w-3"
        checked={available}
      />
      <label htmlFor="termsCondition" className="check-box">
        {terms}
      </label>
    </div>
  );
}
