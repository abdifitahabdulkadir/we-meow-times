import { OPINION_STORIES } from "@/lib/constants";
import OpinionItem from "./OpinionItem";

export default function Opinion() {
  return (
    <section className="lg:border-left order-3 flex w-full flex-col items-start gap-[16px] md:order-4 md:col-span-full lg:order-3 lg:col-span-1">
      <h2 className="text-[1.5rem] leading-[24px] font-bold">Opinion</h2>
      <div className="opinionSectionResponsiveGrid">
        {OPINION_STORIES.map((eachOpinion) => {
          return (
            <div
              key={eachOpinion.id}
              className="max-md:border-bottom-alinged lg:border-bottom-alinged"
            >
              <OpinionItem key={eachOpinion.id} {...eachOpinion} />{" "}
            </div>
          );
        })}
      </div>
    </section>
  );
}
