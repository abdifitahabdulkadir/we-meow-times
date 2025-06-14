import { SPORTS_STORIES } from "@/lib/constants";
import StoryHeader from "../Header/StoryHeader";
import SportItem from "./SportItem";

export default function SportStories() {
  return (
    <section
      className={`order-6 flex w-full flex-col gap-[16px] md:col-span-full`}
    >
      <StoryHeader topic="Sports" text="Visit Sports page" />
      <div className="footballStoriesGrid">
        {SPORTS_STORIES.map((sportStory) => {
          return <SportItem key={sportStory.id} {...sportStory} />;
        })}
      </div>
    </section>
  );
}
