import { helveticaFont } from "@/lib/constants";
import Link from "next/link";

interface Props {
  title: string;
  links: string[];
}

export default function FooterItems({ title, links }: Props) {
  return (
    <div
      className={`flex flex-col gap-[8px] text-white ${helveticaFont.className}`}
    >
      <h2 className="text-[1.125rem] leading-[100%] font-bold text-gray-300">
        {title}
      </h2>
      <ol className="flex flex-col items-center gap-[6px]">
        {links.map((eachLink) => {
          return <FooterItem key={eachLink} text={eachLink} />;
        })}
      </ol>
    </div>
  );
}

interface FooterItemProps {
  text: string;
}

function FooterItem({ text }: FooterItemProps) {
  return (
    <li className="text-center text-[1rem] leading-[24px] font-light">
      <Link href={""}>{text}</Link>
    </li>
  );
}
