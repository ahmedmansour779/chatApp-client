import { IconLogout } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/auth/userSlice";

export default function LogoutButton() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    localStorage.clear()
    document.cookie = "token" + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"
    navigate("/")
  }

  return (
    <div onClick={handleLogout}>
      <Link to="/">
        <IconLogout />
      </Link>
    </div>
  );
}
