import { FaRegUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { RiMenuLine } from "react-icons/ri";

export default function SuperHeader() {
  return (
    <div className="flex h-[56px] w-full items-center gap-x-[24px] bg-gray-900 px-[16px]">
      <RiMenuLine className="size-[24px] text-gray-100" />
      <FiSearch className="size-[24px] text-gray-100" />
      <FaRegUser className="ml-auto size-[24px] text-gray-100" />
    </div>
  );
}
