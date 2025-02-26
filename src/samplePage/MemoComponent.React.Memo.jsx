import React, { useEffect } from "react";

//돔자체가 상태 바꾸고 렌더링(app에서 usetate를 사용)
export const HeavyJobComponent = ({ num, numObj }) => {
  useEffect(() => {
    //렌더링이 되면 이 콘솔로그 실행해줘... 얘때문에 렌더링이 되는게 아님
    console.log("HeavyJobComponent 렌더링");
  }); //화면이 렌더링되면 이게 실행....컴포넌트

  useEffect(() => {
    console.log("num이 바뀌면 heavyPlus가 실행 돼요");
    heavyPlus();
  }, [num]);

  const heavyPlus = () => {
    let total = 0;
    for (let i = 0; i < 123456; i++) {
      total += num;
    }
    return total + num;
  };

  const result = heavyPlus();

  return (
    <p>
      "{num}"를 더해서 만든 연산 결과는 <b>{result}</b>입니다!
    </p>
  );
};

export const HeavyJobComponent2 = ({ num }) => {
  useEffect(() => {
    console.log("HeavyJobComponent2 렌더링");
  });

  useEffect(() => {
    console.log("num이 바뀌면 heavyPlus가 실행 돼요");
    heavyMulti();
  }, [num]);

  const heavyMulti = () => {
    let total = 0;
    for (let i = 0; i < 123456; i++) {
      total += num;
    }
    return total * num;
  };

  const result = heavyMulti();

  return (
    <p>
      "{num}"를 곱해서 만든 연산 결과는 <b>{result}</b>입니다!
    </p>
  );
};

export const MemoHeavyJobComponent = React.memo(HeavyJobComponent);
export const MemoHeavyJobComponent2 = React.memo(HeavyJobComponent2);
