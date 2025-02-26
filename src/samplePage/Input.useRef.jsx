// export const Input = () => {
//   const [text, setText] = useState(""); //다시 렌더링이 된다. 상태값을 받아 변경시켜주는것
//   const refText = useRef(""); 
//   return (
//     <>
//       {/* <input onChange={(e) => setText(e.target.value)} /> 
//         console.log(e.target.value)
//       */}

//       <input ref={refText} />
//       <button onClick={() => alert(refText.current.value)}>클릭!</button>
//     </>
//   );
// };
import { useRef } from "react";

export const Input = () => {
    //객체 분할 구조
    // const [ text, setText ] = useState(""); 배열 
    const refText = useRef("");
    return (
        <>
            {/* <input onChange={(e)=>{
                setText(e.target.value)
                console.log(e.target.value);
            }}/> */}
            <input ref = {refText} />
            <button onClick={()=>alert(refText.current.value)}>클릭!</button>
            <br />
            {/* 입력된 값 : { text } */}
        </>
    )
}




