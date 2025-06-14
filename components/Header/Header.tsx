import SecondaryHeader from "./SecondaryHeader";
import SuperHeader from "./SuperHeader";

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-white pb-[10px]">
      <SuperHeader />
      <SecondaryHeader />
    </header>
  );
}
