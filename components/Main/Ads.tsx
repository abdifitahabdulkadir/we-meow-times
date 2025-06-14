export default function Ads() {
  return (
    <div className="min-lg:border-left order-4 w-full md:order-3 md:col-span-full lg:order-5 lg:col-span-2 min-lg:-mt-[64px]">
      <div className="min-lg:border-top-alinged mt-[32px] flex w-full flex-col items-center gap-y-[8px]">
        <p className="text-[1rem] leading-[24px] text-gray-700 italic">
          — Advertisement —
        </p>
        <div className="h-[300px] w-full bg-gray-300 md:h-[120px]" />
      </div>
    </div>
  );
}
