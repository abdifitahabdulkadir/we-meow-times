import { FaRegUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { RiMenuLine } from "react-icons/ri";

interface Props {
  buttonName: "menu" | "search" | "user";
  otherClasses?: string;
}

export default function Button({ buttonName, otherClasses }: Props) {
  switch (buttonName) {
    case "menu":
      return (
        <button>
          <span className="sr-only">Open main menu</span>
          <RiMenuLine
            className={`relative size-[24px] text-gray-100 ${otherClasses}`}
          />
        </button>
      );
    case "search":
      return (
        <button>
          <span className="sr-only">Open Search</span>
          <FiSearch
            className={`relative size-[24px] text-gray-100 ${otherClasses}`}
          />
        </button>
      );

    case "user":
      return (
        <button className="ml-auto">
          <span className="sr-only">User Account menu</span>
          <FaRegUser
            className={`relative size-[24px] text-gray-100 ${otherClasses}`}
          />
        </button>
      );
  }
}
