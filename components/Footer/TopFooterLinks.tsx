import Image from "next/image";
import Link from "next/link";

interface Props {
  text: string;
}
export default function TopFooterLinks() {
  return (
    <nav
      className={`flex flex-col items-center gap-[16px] border-b border-gray-700 p-[16px] pb-[24px] text-gray-300`}
    >
      <ol className="flex items-baseline gap-x-[20px]">
        <TopFooterItem text="About us " />
        <TopFooterItem text="Press Releases" />
        <TopFooterItem text="Contact us" />
      </ol>
      <div className="flex w-fit items-baseline gap-[16px]">
        <Image
          src={"/icons/facebook.png"}
          alt="facebook link of wemeow Times"
          width={20}
          height={20}
        />
        <Image
          src={"/icons/twitter.png"}
          alt="twitter link of wemeow Times"
          width={20}
          height={20}
        />
      </div>
    </nav>
  );
}

function TopFooterItem({ text }: Props) {
  return (
    <li className="text-[0.875rem] leading-[100%] font-light">
      <Link href={""}>{text}</Link>
    </li>
  );
}
