import { PuzzleCardListData } from "@/types/puzzleCardTypes";
import PuzzleCard from "@/components/PuzzleCard";

export default function PuzzleCardList({
  listData,
}: Readonly<{ listData: PuzzleCardListData }>) {
  return (
    <>
      {listData.map((data) => (
        <PuzzleCard key={data.id} data={data} />
      ))}
    </>
  );
}
