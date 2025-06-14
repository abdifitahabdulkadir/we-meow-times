import MarketStories from "../Market/MarketStories";
import SportStories from "../Sports/SportStories";
import Ads from "./Ads";
import MainStory from "./MainStory";
import Opinion from "./Opinion";
import SecondaryStories from "./SecondaryStories";

export default function Main() {
  return (
    <main className="mt-[48px] grid w-full grid-cols-1 gap-[48px] px-[16px] md:grid-cols-[2fr_1fr] md:gap-x-0">
      <MainStory />
      <SecondaryStories />
      <Opinion />
      <Ads />
      <MarketStories />
      <SportStories />
    </main>
  );
}
