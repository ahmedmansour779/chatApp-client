import { IconMessageFilled } from "@tabler/icons-react";
import { SetStateAction } from "react";
import { itemSidebarData } from "../../../data/itemsSidebarData";
import ChangeLanguage from "../../ChangeLanguage";
import LogoutButton from "../../LogoutButton";
import SwitchModeButton from "../../SwitchModeButton";

interface ItemsSidebar {
  itemId: number;
  setItemId: React.Dispatch<SetStateAction<number>>
}

export default function ItemsSidebar({ itemId, setItemId }: ItemsSidebar) {

  return (
    <div className="col-span-3 h-[100vh] bg-backGroundSidebar flex flex-col justify-between items-center py-4 text-iconSidebar">
      <div className="flex flex-col gap-6 hover:cursor-pointer">
        <IconMessageFilled color="#4eac6d" title="Doot" />
        <div className="flex flex-col gap-4">
          {
            itemSidebarData.map(({ id, icon, title }) => {
              return (
                <div
                  title={title}
                  onClick={() => setItemId(id)}
                  key={id}
                  dangerouslySetInnerHTML={{ __html: icon }}
                  className={`${itemId === id && "text-primary"}`}
                />
              )
            })
          }
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <ChangeLanguage />
        <SwitchModeButton />
        <LogoutButton />
      </div>

    </div>
  );
}
