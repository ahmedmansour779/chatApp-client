import { IconSearch } from "@tabler/icons-react";
import { Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValueRedux } from "../../../redux/auth/userSlice";
import { RootState } from "../../../types/translationTypes";

interface searchBarProps {
  searchValue: string,
  setSearchValue: Dispatch<SetStateAction<string>>
}

export default function SearchBar({ searchValue, setSearchValue }: searchBarProps) {
  const { searchHere } = useSelector((state: RootState) => state.translation.words)
  const { backgroundSearchSection } = useSelector((state: RootState) => state.theme.colors)
  const dispatch = useDispatch()

  return (
    <div className="flex w-full h-fit rounded-lg">
      <input
        style={{
          background: backgroundSearchSection
        }}
        onChange={(e) => {
          setSearchValue(e.target.value)
          dispatch(setSearchValueRedux(e.target.value))
        }}
        value={searchValue}
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
