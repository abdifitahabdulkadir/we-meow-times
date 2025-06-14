import Image from "next/image";
import Link from "next/link";

interface Props {
  text: string;
}
export default function TopFooterLinks() {
  return (
    <nav className={`px-[16px] pb-[24px] text-gray-300 min-lg:px-[120px]`}>
      <div className="flex w-full flex-col items-center gap-[16px] border-b border-gray-700 py-[16px] md:flex-row md:justify-center min-lg:justify-end">
        <ol className="flex items-baseline gap-x-[20px]">
          <TopFooterItem text="About us " />
          <TopFooterItem text="Press Releases" />
          <TopFooterItem text="Contact us" />
        </ol>
        <div className="flex w-fit items-baseline gap-[16px]">
          <Link href={"#"}>
            <span className="sr-only">Visit wemeow facebook account</span>
            <Image
              src={"/icons/facebook.png"}
              alt="facebook link of wemeow Times"
              width={20}
              height={20}
            />
          </Link>
          <Link href={"#"}>
            <span className="sr-only">Visit wemeow twitter(x) account</span>
            <Image
              src={"/icons/twitter.png"}
              alt="twitter link of wemeow Times"
              width={20}
              height={20}
            />
          </Link>
        </div>
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
