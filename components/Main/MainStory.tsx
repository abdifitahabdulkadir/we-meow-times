import { MAIN_STORY } from "@/lib/constants";
import Image from "next/image";

export default function MainStory() {
  const { image, title, abstract, location } = MAIN_STORY;
  return (
    <section className="order-1 flex w-full flex-col gap-[8px]">
      <Image
        src={image.src}
        alt={image.alt}
        width={100}
        height={100}
        className="aspect-[2/1] h-[320px] w-full rounded-[4px] object-cover"
      />
      <h1 className="text-[1.5rem] leading-[28px] font-bold">{title}</h1>
      <p className="line-clamp-[7] text-[1rem] leading-[24px] font-normal whitespace-pre-wrap text-gray-900 md:line-clamp-[20]">
        <span className="me-1.5 uppercase">{`${location}  —`}</span>
        {abstract}
      </p>
      <button className="self-start text-[1rem] leading-[24px] font-semibold italic">
        Continue Reading
      </button>
    </section>
  );
}
