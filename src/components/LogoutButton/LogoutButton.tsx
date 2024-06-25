import { IconLogout } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function LogoutButton() {
  return (
    <div>
      <Link to="/">
        <IconLogout />
      </Link>
    </div>
  );
}
