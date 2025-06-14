import { OPINION_STORIES } from "@/lib/constants";
import OpinionItem from "./OpinionItem";

export default function Opinion() {
  return (
    <section className="opinionSectionResponsiveGrid order-3 md:order-4 md:col-span-full">
      {OPINION_STORIES.map((eachOpinion) => {
        return (
          <div key={eachOpinion.id} className="max-md:border-bottom-alinged">
            <OpinionItem key={eachOpinion.id} {...eachOpinion} />{" "}
          </div>
        );
      })}
    </section>
  );
}
