import MarketStories from "../Market/MarketStories";
import SportStories from "../Sports/SportStories";
import Ads from "./Ads";
import MainStory from "./MainStory";
import Opinion from "./Opinion";
import SecondaryStories from "./SecondaryStories";

export default function Main() {
  return (
    <main className="mt-[48px] grid w-full grid-cols-1 gap-[48px] px-[16px] md:grid-cols-[2fr_1fr] min-md:gap-x-0 lg:grid-cols-[7fr_6fr_4fr] lg:gap-y-[64px]">
      <MainStory />
      <SecondaryStories />
      <Opinion />
      <Ads />
      <div className="order-5 flex w-full flex-col gap-[48px] md:col-span-full min-lg:flex-row min-lg:gap-0">
        <MarketStories />
        <SportStories />
      </div>
    </main>
  );
}
