import Image from "next/image";

interface Props {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  abstract: string;
}
export default function SecondaryStoryItem({ image, title, abstract }: Props) {
  return (
    <div className="grid w-full grid-cols-[120px_1fr] items-start gap-[16px]">
      <Image
        src={image.src}
        alt={image.alt}
        width={100}
        height={100}
        className="aspect-square size-[120px] rounded-[4px] object-cover"
      />
      <div>
        <h1 className="text-[1.125rem] leading-[25px] font-bold">{title}</h1>
        <p className="line-clamp-3 text-[1rem] font-normal text-gray-900">
          {abstract}
        </p>
      </div>
    </div>
  );
}
