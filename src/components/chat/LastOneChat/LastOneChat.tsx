import { useDispatch } from "react-redux";
import { setChatId } from "../../../redux/auth/userSlice";

export type LastOneChatProps = {
  image: string,
  name: string,
  id: string
};
export default function LastOneChat({ image, name, id }: LastOneChatProps) {
  const dispatch = useDispatch()

  return (
    <div
      id={id} onClick={(e) => dispatch(setChatId(e.currentTarget.id))}
      className="flex gap-2 items-center text-sm">
      <img
        className="rounded-full w-7 h-7"
        src={image} alt={name} />
      <p>
        {name}
      </p>
    </div>
  );
}
