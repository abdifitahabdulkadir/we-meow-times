import { SECONDARY_STORIES } from "@/lib/constants";
import SecondaryStoryItem from "./SecondaryStoryItem";

export default function SecondaryStories() {
  return (
    <section className="border-left order-2 flex w-full flex-col gap-[23px] pr-[16px] md:gap-0">
      {SECONDARY_STORIES.map((item) => {
        return (
          <div key={item.id} className="border-bottom-alinged">
            <SecondaryStoryItem {...item} />
          </div>
        );
      })}
    </section>
  );
}
