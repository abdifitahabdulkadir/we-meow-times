interface Props {
  topic: string;
  text: string;
}
export default function StoryHeader({ topic, text }: Props) {
  return (
    <div className="flex w-full justify-between">
      <h3 className="text-[1.5rem] leading-[24px] font-bold">{topic}</h3>
      <p className="text-[.75rem] leading-[24px] font-bold">
        {text}
        <span className="ms-0.5 scale-[1.5] text-[.75rem] leading-[24px] font-bold">
          »
        </span>
      </p>
    </div>
  );
}
