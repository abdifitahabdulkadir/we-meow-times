import SecondaryHeader from "./SecondaryHeader";
import SuperHeader from "./SuperHeader";

export default function Header() {
  return (
    <header className="w-full">
      <SuperHeader />
      <SecondaryHeader />
    </header>
  );
}
