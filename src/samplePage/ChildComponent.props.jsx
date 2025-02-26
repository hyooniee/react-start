export const ChildComponent = ({ title, content }) => {
  return (
    <div className="card">
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};
//부모한테 자식을 전달해준다.  컴포넌트 재사용하고싶을때, 값이 유동적으로 변할수 있을때
