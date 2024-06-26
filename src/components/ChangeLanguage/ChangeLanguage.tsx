import { IconLanguage } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/translation/translationSlice";
import { RootState } from "../../types/translationTypes";

export default function ChangeLanguage() {
  const language = useSelector((state: RootState) => state.translation.language)
  const dispatch = useDispatch()

  const handelLanguage = () => {
    language == "ar" ?
      dispatch(setLanguage('en')) :
      dispatch(setLanguage('ar'))
  }

  return (
    <div
      className="hover:cursor-pointer"
      onClick={handelLanguage}>
      <IconLanguage />
    </div>
  );
}
