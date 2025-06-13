import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  author: string;
  avatar: string;
  title: string;
}
export default function OpinionItem({ author, avatar, title }: Props) {
  return (
    <article className="grid w-full grid-cols-[2fr_1fr] gap-x-[21px]">
      <div>
        <h2 className="text-[1.125rem] leading-[24px] font-semibold text-gray-700">
          {author}
        </h2>
        <Link
          href={""}
          className="mt-[8px] text-[1.125rem] leading-[22px] font-bold text-gray-900 hover:text-gray-500"
        >
          {title}
        </Link>
      </div>
      <Image
        src={avatar}
        alt={`${author}'s profile picture`}
        width={200}
        height={200}
        className="size-[48px] justify-self-end rounded-full"
      />
    </article>
  );
}
