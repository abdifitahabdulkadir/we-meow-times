import { helveticaFont, SPORTS_STORIES } from "@/lib/constants";
import StoryHeader from "../Header/StoryHeader";
import SportItem from "./SportItem";

export default function SportStories() {
  return (
    <section
      className={`flex w-full flex-col gap-[16px] ${helveticaFont.className}`}
    >
      <StoryHeader topic="Sports" text="Visit Sports page" />
      <div className="responsiveGrid1">
        {SPORTS_STORIES.map((sportStory) => {
          return <SportItem key={sportStory.id} {...sportStory} />;
        })}
      </div>
    </section>
  );
}
