import { OPINION_STORIES } from "@/lib/constants";
import OpinionItem from "./OpinionItem";

export default function Opinion() {
  return (
    <section>
      {OPINION_STORIES.map((eachOpinion) => {
        return (
          <div key={eachOpinion.id} className="border-bottom-alinged">
            <OpinionItem key={eachOpinion.id} {...eachOpinion} />{" "}
          </div>
        );
      })}
    </section>
  );
}
