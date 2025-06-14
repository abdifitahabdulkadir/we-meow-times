import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  image: {
    src: string;
    alt: string;
  };
  title: string;
}
export default function SportItem({ image, title }: Props) {
  return (
    <Link
      href={"#"}
      className="group flex w-full min-w-[165px] flex-col gap-[8px]"
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={100}
        height={100}
        className="h-[132px] w-full rounded-[4px] object-cover"
      />
      <p
        className={`group-hover:text-secondary text-[1.125rem] leading-[25px] font-bold`}
      >
        {title}
      </p>
    </Link>
  );
}
