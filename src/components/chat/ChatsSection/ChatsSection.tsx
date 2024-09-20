import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { handleSearchUser } from "../../../functions/searchUserFunction";
import { useSocket } from "../../../functions/SocketProvider";
import { conversationType } from "../../../types/chatsType";
import { dataSearchUsers } from "../../../types/requestTypes";
import { RootState } from "../../../types/translationTypes";
import LastOneChat from "../LastOneChat";
import OneUserFromSearch from "../OneUserFromSearch";
import SearchBar from "../SearchBar";

export default function ChatsSection() {
  const { chats } = useSelector((state: RootState) => state.translation.words)
  const { backgroundSidebar, textSidebar } = useSelector((state: RootState) => state.theme.colors)
  const [searchValue, setSearchValue] = useState<string>("")
  const [searchData, setSearchData] = useState<dataSearchUsers>()
  const { searchValue: searchValueRedux, _id } = useSelector((state: RootState) => state.user)
  const [allUser, setAllUser] = useState<conversationType>([])
  const socketConnection = useSocket()

  useEffect(() => {
    const searchResponse = handleSearchUser({ searchValue })
    searchResponse.
      then((response) => response?.data).
      then((response) => {
        setSearchData(response?.data.slice(0, 20));
      })
  }, [searchValue])
  useEffect(() => {
    if (socketConnection) {
      socketConnection.emit('sidebar', _id)
      socketConnection.on('conversation', (data: conversationType) => {
        setAllUser(data)
      })
    }
  }, [_id, socketConnection])
  return (
    <div
      style={{
        background: backgroundSidebar,
        color: textSidebar
      }}
      className="tablet:col-span-9 row-span-11 w-full h-[100vh] overflow-hidden p-4 transition ease-in-out delay-300 flex flex-col gap-4 ">
      <h1 className="font-medium text-2xl">
        {chats}
      </h1>
      <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />
      <div className="flex flex-col gap-2 w-full overflow-y-scroll">
        {
          searchValueRedux !== "" ?
            searchData?.map((item, index) => {
              return (
                <OneUserFromSearch _id={item._id} key={index} _v={item._v} name={item.name} profile_pic={item.profile_pic} />
              )
            }) :
            allUser.map((item, index) => {
              return (
                <LastOneChat id={item.sender._id} key={index} image={item.sender.profile_pic} name={item.sender.name} />
              )
            })
        }
      </div>
    </div>
  );
}
