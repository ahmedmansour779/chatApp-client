import { IconMessageFilled } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import image from "../../shared/images/girle.png";
import { RootState } from "../../types/translationTypes";

export default function SideBarLogin() {
  const lang = useSelector((state: RootState) => state.translation.language)
  return (
    <div className={`tablet:absolute top-4 ${lang == "en" ? "left-4" : "right-4"} text-white tablet:w-2/4 w-full tablet:min-h-[95vh] flex tablet:items-end items-center flex-col justify-between z-10`}>
      <Link to="/" className="flex items-center gap-1 font-semibold text-2xl tracking-widest">
        <p>Doot</p>
        <IconMessageFilled size={30} />
      </Link>
      <img className={`tablet:block hidden ${lang == "ar" && "scale-x-[-1]"}`} src={image} />
    </div>
  );
}
