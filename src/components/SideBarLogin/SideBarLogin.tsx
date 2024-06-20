import { IconMessageFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import image from "../../shared/images/girle.png";

export default function SideBarLogin() {
  return (
    <div className="tablet:absolute top-4 left-4 text-white tablet:w-2/4 w-full tablet:min-h-[95vh] flex tablet:items-end items-center flex-col justify-between">
      <Link to="/" className="flex items-center gap-1 font-semibold text-2xl tracking-widest">
        <p>Doot</p>
        <IconMessageFilled size={30} />
      </Link>
      <img className="tablet:block hidden" src={image} />
    </div>
  );
}
