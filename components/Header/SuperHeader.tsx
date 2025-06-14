import Button from "./Button";

export default function SuperHeader() {
  return (
    <div className="flex h-[56px] w-full items-center gap-x-[24px] bg-gray-900 px-[16px] lg:hidden">
      <Button buttonName="menu" />
      <Button buttonName="search" />
      <Button buttonName="user" />
    </div>
  );
}
