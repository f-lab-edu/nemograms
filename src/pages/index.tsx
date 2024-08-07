import Head from "next/head";
import { PuzzleCardListData } from "@/types/puzzleCardTypes";
import PuzzleCardList from "@/components/PuzzleCardList";

const puzzleCardListData: PuzzleCardListData = [
  {
    id: "1",
    title: "Sunset",
    size: [10, 10],
    image: "#",
    completed: false,
  },
  {
    id: "2",
    title: "Mountain",
    size: [15, 15],
    image: "#",
    completed: true,
  },
  {
    id: "3",
    title: "Cat",
    size: [20, 20],
    image: "#",
    completed: false,
  },
  {
    id: "4",
    title: "Tree",
    size: [5, 5],
    image: "#",
    completed: true,
  },
  {
    id: "5",
    title: "House",
    size: [10, 10],
    image: "#",
    completed: false,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Nemograms</title>
      </Head>
      <div>
        <PuzzleCardList listData={puzzleCardListData} />
      </div>
    </>
  );
}
