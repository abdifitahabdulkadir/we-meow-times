import { MARKET_DATA } from "@/lib/constants";
import StoryHeader from "../Header/StoryHeader";
import MarketItem from "./MarketItem";

export default function MarketStories() {
  return (
    <section
      className={`flex w-full flex-col gap-[20px] font-normal min-lg:w-1/2`}
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
