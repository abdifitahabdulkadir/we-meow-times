import Button from "./Button";
import SubscribeButton from "./SubscribeButton";

export default function SecondaryHeader() {
  return (
    <div className="mt-[32px] flex items-baseline justify-between">
      <div className="hidden items-center gap-x-[24px] min-lg:flex">
        <Button buttonName="search" otherClasses="text-gray-900" />
        <Button buttonName="menu" otherClasses="text-gray-900" />
      </div>
      <div className="flex w-full flex-col items-center">
        <h2 className={`apply-chomsky text-[3rem]`}>We Meow Times</h2>
        <h6 className="text-[1.125rem] leading-[1.5rem] font-semibold">
          Saturday, June 17th, 2021
        </h6>
      </div>
      <SubscribeButton />
    </div>
  );
}
