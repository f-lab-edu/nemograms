/* eslint-disable react/no-array-index-key */
import { PuzzleData } from "../../types/puzzle";

export default function Problem() {
  const data: PuzzleData = {
    rows: [[3], [4], [5], [4], [5]],
    columns: [[3], [4], [4, 3], [2], [3]],
  };

  return (
    <>
      <header>헤더</header>
      <div>
        <div>사이즈</div>
        <button type="button">undo</button>
        <button type="button">reset</button>
      </div>
      <div>
        {data.columns.map((array, index) => {
          console.log(array);

          return (
            <div key={index}>
              {array.map((num, i) => (
                <div key={i}>{num}</div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}
