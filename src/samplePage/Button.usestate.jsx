import { useState } from "react";

// setCount((prev) => prev + 1) : 이전상태 데이터를 가지고 있음. 이전상태를 가지고와서 변화주고싶을때
export const Button = () => {
  const [count, setCount] = useState(0); //첫번째칸에 count:0, setCount:함수
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>클릭</button>
      <br />
      count: {count}
    </>
  );
};
