import { MouseEventHandler, useState } from "react";

function Cell() {
  const [status, setStatus] = useState<boolean | undefined>(undefined);

  // 순수 함수이니 분리
  const output = (cellStatus: boolean | undefined) => {
    switch (cellStatus) {
      case true:
        return "O";
      case false:
        return "X";
      default:
        return "#";
    }
  };

  // 어떤 타입 추론에서 작성하면 에러가 나고 에러가 안 나는지 공부하기
  const handleClick = () => {
    setStatus(true);
  };

  const handleRightClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setStatus(false);
  };

  // TODO: 경고 자세히 공부 -> 웹 접근성 -> 왜 중요하게 생각하는지?
  return (
    <div onClick={handleClick} onContextMenu={handleRightClick}>
      {output(status)}
    </div>
  );
}

export default Cell;
