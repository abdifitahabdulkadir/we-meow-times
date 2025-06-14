import { SPORTS_STORIES } from "@/lib/constants";
import StoryHeader from "../Header/StoryHeader";
import SportItem from "./SportItem";

export default function SportStories() {
  return (
    <section
      className={`min-lg:border-left flex w-full flex-col gap-[16px] min-lg:w-1/2`}
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
