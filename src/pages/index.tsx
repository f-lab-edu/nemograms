import Head from "next/head";
import { promises as fs } from "fs";
import path from "path";
import PuzzleCardList from "@/components/PuzzleCardList";
import { Puzzle } from "@/types/puzzle";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/data/puzzles.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const data: Puzzle[] = JSON.parse(fileContents);

  return {
    props: {
      puzzles: data,
    },
  };
}

export default function Home({ puzzles }: { readonly puzzles: Puzzle[] }) {
  return (
    <>
      <Head>
        <title>Nemograms</title>
      </Head>
      <PuzzleCardList puzzles={puzzles} />
    </>
  );
}
