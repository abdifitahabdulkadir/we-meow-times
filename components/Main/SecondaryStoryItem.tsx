import Image from "next/image";
import Link from "next/link";

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
    <div className="grid w-full grid-cols-[120px_1fr] items-start gap-[16px] md:grid-cols-1 lg:grid-cols-[120px_1fr]">
      <Image
        src={image.src}
        alt={image.alt}
        width={100}
        height={100}
        className="aspect-square size-[120px] w-full rounded-[4px] object-cover"
      />
      <Link href={"#"} className="group">
        <h1 className="group-hover:text-secondary text-[1.125rem] leading-[25px] font-bold">
          {title}
        </h1>
        <p className="line-clamp-3 text-[1rem] font-normal text-gray-900">
          {abstract}
        </p>
      </Link>
    </div>
  );
}
