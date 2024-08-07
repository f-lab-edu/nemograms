import Link from "next/link";
import { Puzzle, Solution } from "@/types/puzzle";

export default function PuzzleCard({
  puzzle,
}: Readonly<{ puzzle: Puzzle | Solution }>) {
  const { id, title, size } = puzzle;
  const { width, height } = size;
  const image =
    puzzle.completed && "solution" in puzzle ? puzzle.solution : "🧩";

  return (
    <Link href={`/puzzles/${id}`}>
      <div>{image}</div>
      <h3>{title}</h3>
      <div>
        {width}x{height}
      </div>
    </Link>
  );
}
