import { IconMoon, IconSun } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../redux/theme/themeSlice";
import { RootState } from "../../types/translationTypes";

export default function SwitchModeButton() {
  const mode = useSelector((state: RootState) => state.theme.mode)
  const dispatch = useDispatch()

  return (
    <div
      className="hover:cursor-pointer"
      onClick={() => dispatch(toggleMode())}>
      {
        mode == "dark" ?
          <IconSun /> :
          <IconMoon />
      }
    </div>
  );
}
