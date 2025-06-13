import { chomskyFont } from "@/lib/constants";

export default function SecondaryHeader() {
  return (
    <div className="mt-[32px] flex w-full flex-col items-center">
      <h2 className={`${chomskyFont.className} text-[3rem] font-normal`}>
        We Meow Times
      </h2>
      <h6 className="text-[1.125rem] leading-[1.5rem] font-semibold">
        Saturday, June 17th, 2021
      </h6>
    </div>
  );
}
