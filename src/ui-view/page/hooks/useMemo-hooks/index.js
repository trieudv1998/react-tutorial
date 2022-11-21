import React, { useMemo, useState } from "react";
import MyComponent from "./component/my-component";

const PageUseMemo = (props) => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    const myArr = useMemo(() => {
        let score = [40, 100, 1, 6, 35, 10, count * 100];
        score.sort(function (a, b) { return b - a });
        return score.toString();
    }, [count])

    const onClickRender = () => { setCount((prev) => (prev + 1)) }

    const onClickNoRender = () => { setCount1(count1 + 1) }

    return (
        <>
            <button onClick={() => onClickNoRender()}>No-render my component 1</button>
            {count1}
            <button onClick={() => onClickRender()}>Re-render my component 0</button>
            {count}
            <MyComponent content={myArr} />
        </>
    )
}
export default PageUseMemo