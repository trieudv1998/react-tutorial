import React, { useEffect, useRef, useState } from "react";

const PageUseRef = (props) => {
  let number;
  console.log(number);
  const number2 = useRef();
  const ele = useRef();
  console.log(ele.current);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const onStart = () => {
    number = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    //lấy giá trị thì phải chọc vào current
    number2.current = setInterval(() => {
      setCount2((prevCount2) => prevCount2 + 1);
    }, 1000);
  };
  const onStop = () => {
    //biến number khởi tạo trong hàm nên bị gọi lại và nhận lại giá trị ban đầu mỗi khi Component render =>undefined
    clearInterval(number);
    //useRef giải quyết vấn đề bằng cách tạo ra 1 biến giống như tạo 1 biến nằm ngoài Component và không bị 
    // phụ thuộc vào giá trị khởi tạo
    clearInterval(number2.current);
  };

  return (
    <>
      <button onClick={onStart}>Start</button>
      <div>{count}</div>
      <div>{count2}</div>
      {/* ngoài ra có thể gán vào các element để thao tác với các element */}
      <button ref={ele} onClick={onStop}>Stop</button>
    </>
  );
};
export default PageUseRef;
