import { MARKET_DATA } from "@/lib/constants";
import StoryHeader from "../Header/StoryHeader";
import MarketItem from "./MarketItem";

export default function MarketStories() {
  return (
    <section
      className={`order-5 flex flex-col gap-[20px] font-normal md:col-span-full`}
    >
      <StoryHeader topic="Market" text="Visit Market Area" />

      <div className="marketStoriesGrid">
        {MARKET_DATA.map((market, index) => {
          return <MarketItem key={index} {...market} />;
        })}
      </div>
    </section>
  );
}
