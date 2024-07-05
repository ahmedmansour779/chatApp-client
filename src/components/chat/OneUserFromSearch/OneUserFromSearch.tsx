import { useDispatch } from "react-redux";
import { setChatId } from "../../../redux/auth/userSlice";
import userImage from "../../../shared/images/user.jpg";

export type OneUserFromSearchProps = {
  email?: string;
  createdAt?: string;
  name: string;
  profile_pic: string;
  updatedAt?: string;
  _id: string;
  _v: string
};

export default function OneUserFromSearch({ name, profile_pic, _v, _id }: OneUserFromSearchProps) {
  const dispatch = useDispatch()

  return (
    <div id={_id} className="flex gap-4 items-center hover:cursor-pointer" onClick={(e) => dispatch(setChatId(e.currentTarget.id))}>
      <img src={profile_pic == "" ? userImage : profile_pic} alt={name} className="w-10 h-10 rounded-full" />
      <p className="text-sm">
        {name}
      </p>
      {_v}
    </div>
  );
}
