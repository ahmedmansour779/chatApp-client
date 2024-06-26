import { IconSearch } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { RootState } from "../../../types/translationTypes";

export default function SearchBar() {
  const { searchHere } = useSelector((state: RootState) => state.translation.words)
  const { backgroundSearchSection } = useSelector((state: RootState) => state.theme.colors)

  return (
    <div className="flex w-full rounded-lg overflow-hidden ">
      <input
        style={{
          background: backgroundSearchSection
        }}
        type="text" placeholder={searchHere} className="w-[inherit] text-sm p-1 outline-none  transition ease-in-out delay-300" />
      <div
        style={{
          background: backgroundSearchSection
        }}
        className="text-sm p-1 flex justify-center items-center  transition ease-in-out delay-300">
        <IconSearch size={15} className=" transition ease-in-out delay-300" />
      </div>
    </div>
  );
}
