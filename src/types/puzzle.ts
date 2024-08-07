type Line = number[];
type Table = number[][];
type Size = {
  width: number;
  height: number;
};

export interface Puzzle {
  id: string;
  title: string;
  size: Size;
  rows: Line[];
  columns: Line[];
  completed: boolean;
  createdAt: Date;
}

export interface Solution extends Puzzle {
  solution: Table;
}
