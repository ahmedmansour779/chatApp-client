import { useSelector } from "react-redux";
import { RootState } from "../../../types/translationTypes";
import SearchBar from "../SearchBar";

export default function ChatsSection() {
  const { chats } = useSelector((state: RootState) => state.translation.words)
  const { backgroundSidebar, textSidebar } = useSelector((state: RootState) => state.theme.colors)

  return (
    <div
      style={{
        background: backgroundSidebar,
        color: textSidebar
      }}
      className="col-span-9 w-full p-4 transition ease-in-out delay-300 flex flex-col gap-4 ">
      <h1 className="font-medium text-2xl">
        {chats}
      </h1>
      <SearchBar />
    </div>
  );
}
