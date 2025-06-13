import Image from "next/image";

interface Props {
  tickerSymbol: string;
  exchangeName: string;
  percentChange: number;
}
export default function MarketItem({
  tickerSymbol,
  exchangeName,
  percentChange,
}: Props) {
  return (
    <div
      className={`marketDropShadow apply-helvetica grid grid-cols-2 rounded-[4px] bg-white p-[12px] pb-[9px]`}
    >
      <div className="flex flex-col items-start gap-[4px]">
        <p className="text-[1.5rem] leading-[24px] font-bold">{tickerSymbol}</p>
        <p className="text-[.825rem] leading-[24px] font-light text-gray-700">
          {exchangeName}
        </p>
      </div>
      <div className="flex flex-col items-end gap-[9px]">
        <Image
          src={`${percentChange > 1 ? "/icons/market-grow.svg" : "/icons/market-down.svg"}`}
          alt={`${percentChange > 1 ? "market grow icon" : "market down icon"}`}
          width={100}
          height={100}
          priority
          className="h-[19px] w-[73px]"
        />
        <span
          className={`text-[0.875rem] leading-[24px] font-bold ${percentChange > 1 ? "text-secondary" : "text-urgent"}`}
        >
          {percentChange > 1 ? `+${percentChange}%` : `${percentChange}%`}
        </span>
      </div>
    </div>
  );
}
