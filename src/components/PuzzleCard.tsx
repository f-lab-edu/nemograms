import Link from "next/link";
import { Puzzle } from "@/types/puzzle";

export default function PuzzleCard({ puzzle }: Readonly<{ puzzle: Puzzle }>) {
  const { id, title, size } = puzzle;
  const { width, height } = size;
  const image =
    puzzle.completed && "solution" in puzzle ? puzzle.solution : "🧩";

  return (
    <Link className="puzzle-card" href={`/puzzles/${id}`}>
      <div className="puzzle-card-img">{image}</div>
      <div>
        <h3>{title}</h3>
        <div>
          {width}x{height}
        </div>
      </div>
    </Link>
  );
}
