import React, { useEffect, useRef, useState } from "react";

// Ref được viết tắt và có ý nghĩa là reference , là một thuộc tính của 1 thẻ Jsx và tham chiếu tới chính nó . Hay nói cách 
// khác là ref cho phép chúng ta có thể truy cập trực tiếp đến element và sửa đổi nó ngay lập tức mà không cần đến props hay 
// state để component bị re-render lại . Nó khá giống việc chúng ta làm việc với DOM element thông qua 
// việc gọi “document.getElementById()”

// 1. useRef trả về một đối tượng ref của DOM có thể thay đổi có thuộc tính .current được khởi tạo cho đối số được truyền 
// vào (initialValue). Đối tượng được trả về sẽ tồn tại trong toàn bộ thời gian tồn tại của thành phần.
// 2. Dùng useRef khi bạn cần thao tác với các thành phần của DOM, ví dụ như input, div, span, p,…
// 3. useRef.current có thể gán trực tiếp được giá trị.


// cái quan trọng không phải là useRef sẽ đc call ở mounted, nó sẽ được call ở lần đầu render component. 
// và mỗi khi setState qua useState sẽ dẫn đến rerender component, nhưng set giá trị cho ref thì không.
// việc dùng useRef thay vì move biến ra ngoài component(tạo closure) là bởi do logic sẽ cần phải duy trì
// trong vòng đời của component, nếu move ra closure thì sinh ra nhiều instances của component đó sẽ dùng 
// cùng 1 data(semi global), nó sẽ phù hợp với các chức năng cần thế, ví dụ tạo unique ID cho mỗi component chẳng hạn.


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
