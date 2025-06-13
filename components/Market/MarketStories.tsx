import { helveticaFont, MARKET_DATA } from "@/lib/constants";
import StoryHeader from "../Header/StoryHeader";
import MarketItem from "./MarketItem";

export default function MarketStories() {
  return (
    <section
      className={`flex flex-col gap-[20px] font-normal ${helveticaFont.className}`}
    >
      <StoryHeader topic="Market" text="Visit Market Area" />

      <div className="responsiveGrid1">
        {MARKET_DATA.map((market, index) => {
          return <MarketItem key={index} {...market} />;
        })}
      </div>
    </section>
  );
}
