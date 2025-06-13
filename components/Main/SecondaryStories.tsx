import { SECONDARY_STORIES } from "@/lib/constants";
import SecondaryStoryItem from "./SecondaryStoryItem";

export default function SecondaryStories() {
  return (
    <section className="flex w-full flex-col gap-[23px]">
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
