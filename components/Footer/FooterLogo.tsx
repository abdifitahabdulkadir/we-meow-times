import { chomskyFont, helveticaFont } from "@/lib/constants";

export default function FooterLogo() {
  return (
    <div className="bg-offblack mt-[48px] flex w-full flex-col items-center pb-[20px]">
      <h2
        className={`${chomskyFont.className} text-[2rem] font-normal text-gray-100`}
      >
        We Meow Times
      </h2>
      <p
        className={`text-[0.875rem] leading-[100%] font-light text-gray-500 ${helveticaFont.className}`}
      >
        © 2025 | Wemeow Ltd. All Rights Reserved
      </p>
    </div>
  );
}
