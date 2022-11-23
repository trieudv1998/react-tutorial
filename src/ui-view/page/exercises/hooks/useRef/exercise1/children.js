import React, { forwardRef, useImperativeHandle } from "react";

const Children = ((props, ref) => {
    const [text, setText] = React.useState("");
    const [number, setNumber] = React.useState(1);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    // useImperativeHandle như sau đây để có thể gọi được các method thông qua thuộc tính ref của được 
    // gán giá trị từ component Cha
    useImperativeHandle(ref, () => ({
        incrseaseNumber: () => setNumber(number + 1),
        returnText: () => text,
    }));

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <p>{number}</p>
        </div>
    );
});
// bạn sẽ phải sử dụng thêm forwardRef để bọc Children component như 1 HOC (higher order component) để có thể 
// sử dụng biến ref được truyền vào component Con thông qua props
export default forwardRef(Children)