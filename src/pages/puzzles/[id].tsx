import { useRouter } from "next/router";
import { promises as fs } from "fs";
import path from "path";
import { Puzzle } from "@/types/puzzle";
import Cell from "@/components/Cell";

// getServerSideProps랑 StaticProps 차이 숙지
export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), "src/data/puzzles.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const data: Puzzle[] = JSON.parse(fileContents);

  return {
    props: {
      puzzles: data,
    },
  };
}

export default function PuzzlePage({
  puzzles,
}: {
  readonly puzzles: Puzzle[];
}) {
  const router = useRouter();
  const { id } = router.query;
  const puzzle = puzzles.find((item) => item.id === id);

  // early return 숙지
  // 옵셔널 체이닝 숙지
  if (!puzzle) {
    return <div>puzzle not found</div>;
  }

  return (
    <div>
      <div>
        <div>
          {puzzle.size.width}X{puzzle.size.height}
        </div>
        <button type="button">undo</button>
        <button type="button">reset</button>
      </div>
      <div className="puzzle-table">
        {Array.from({ length: puzzle.size.height }, (_, y) => (
          <div key={y} className="puzzle-row">
            {Array.from({ length: puzzle.size.width }, (e, x) => (
              <div key={x} className="puzzle-cell">
                <Cell />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
