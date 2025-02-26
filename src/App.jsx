/* import { Input } from "./samplePage/Input.useRef"; */
/*  import { ParantComponent } from "./samplePage/Hook.useEffect/ParentComponent "; */
/* import { Table } from "./samplePage/Table"; */

import { useState } from "react";
import { ChildComponent } from "./samplePage/ChildComponent.props";
import {
  MemoHeavyJobComponent,
  MemoHeavyJobComponent2,
} from "./samplePage/MemoComponent.React.Memo";

function App() {
  const [plusNum, setPlusNum] = useState(0);
  const [multiNum, setMultiNum] = useState(0);
  return (
    <>
      {/* <Input /> */}
      {/* <Table /> */}
      {/*  <ParantComponent /> */}
      {/*  <ChildComponent title={"제목1"} content={"내용을 작성해요."} />
      <ChildComponent title={"제목2"} content={"내용을 작성해요1."} />
      <ChildComponent title={"제목3"} content={"내용을 작성해요2."} />
      <ChildComponent title={"제목4"} content={"내용을 작성해요3."} />
      <ChildComponent title={"제목5"} content={"내용을 작성해요4."} />
      <ChildComponent title={"제목6"} content={"내용을 작성해요5."} />
      <ChildComponent title={"제목7"} content={"내용을 작성해요6."} /> */}
      <input type="number" onChange={(e) => setPlusNum(e.target.value)} />
      <MemoHeavyJobComponent num={Number(plusNum)} />
      {/* props로 넘겨주겠다 */}
      <input type="number" onChange={(e) => setMultiNum(e.target.value)} />
      <MemoHeavyJobComponent2 num={Number(multiNum)} />
    </>
  );
}

export default App;
