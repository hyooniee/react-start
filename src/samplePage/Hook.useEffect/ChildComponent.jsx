import { useEffect, useState } from "react";

export const ChildComponent = () => {
  const [count, setCount] = useState(0); //훅:값이 저장되는 생명주기 컴포넌트가 닫힐때까지 // 컴포넌트가 닫히면 값은 초기로 돌아간다.
  useEffect(() => {
    alert("자식 컴포넌트 생성");
    //컴포넌트가 사라질때 해당 로직이 사라짐
    return () => {
      alert("자식 컴포넌트 닫힘");
    };
  }, []); //화면이 최초에 열릴때 한번만 사용

  useEffect(() => {
    count && alert(`변경된 숫자는 ${count}입니다.`); //숫자 0은 false니까 0일때는 안열리게! true만 열리게
  }, [count]); //화면이 최초에 열렸을때, 카운트에 대한 값이 변경되었을 때(의존성배열)

  return (
    <div className="w-80 h-52 border border-black-400 pt-16">
      <p>카운트: {count} </p>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
      <p className="font-mono text-xl">ChildComponent</p>
    </div>
  );
};
