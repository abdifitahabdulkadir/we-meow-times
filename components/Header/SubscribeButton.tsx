import Link from "next/link";

export default function SubscribeButton() {
  return (
    <div className="hidden w-fit flex-col gap-[8px] min-lg:flex">
      <button className="bg-primary apply-helvetica h-[40px] w-[143px] rounded-[4px] text-[1rem] font-bold text-white uppercase">
        Subscribe
      </button>
      <Link
        href={""}
        className="text-center text-[0.875rem] leading-[22px] font-normal italic underline"
      >
        Already a subscriber?
      </Link>
    </div>
  );
}
