import { IconBrush, IconLanguage, IconMail } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { RootState } from "../../../types/translationTypes";

export default function ProfileSection() {
  const { myProfile, light, dark } = useSelector((state: RootState) => state.translation.words)
  const language = useSelector((state: RootState) => state.translation.language)
  const { email, name, profile_pic } = useSelector((state: RootState) => state.user)
  const mode = useSelector((state: RootState) => state.theme.mode)
  const { backgroundSidebar, textSidebar } = useSelector((state: RootState) => state.theme.colors)

  return (
    <div
      style={{
        background: backgroundSidebar,
        color: textSidebar
      }}
      className="col-span-9 w-full transition ease-in-out delay-300 flex flex-col gap-4 ">
      <div className="flex flex-col w-full items-center gap-8 relative border-b-[1px] border-solid border-lightBlack">
        <div className="h-32 relative w-full">
          <img src={profile_pic} className="object-cover h-full w-full" />
          <p className="absolute top-2 left-2 text-white font-medium">
            {myProfile}
          </p>
        </div>
        <img src={profile_pic} className="rounded-full w-16 h-16 object-cover absolute top-24 border-2 border-solid border-light" />
        <div className="pt-2 pb-4 font-medium">
          <p>{name.toUpperCase()}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-xs p-2">
        <div className="flex gap-1" style={{ overflowWrap: "anywhere" }}>
          <IconMail size={20} />
          <p>{email}</p>
        </div>
        <div className="flex gap-1">
          <IconBrush size={20} />
          <p>
            {
              mode == "dark" ? dark : light
            }
          </p>
        </div>
        <div className="flex gap-1">
          <IconLanguage size={20} />
          <p>
            {
              language == "ar" ? "عربي" : "English"
            }
          </p>
        </div>
      </div>
    </div>
  );
}
