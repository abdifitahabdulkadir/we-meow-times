import Image from "next/image";

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
    <div className="flex w-full flex-col gap-[8px]">
      <Image
        src={image.src}
        alt={image.alt}
        width={100}
        height={100}
        className="h-[132px] w-full rounded-[4px] object-cover"
      />
      <p className={`text-[1.125rem] leading-[25px] font-bold`}>{title}</p>
    </div>
  );
}
