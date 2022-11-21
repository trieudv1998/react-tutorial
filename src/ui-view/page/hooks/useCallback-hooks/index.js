import React, { useCallback, useState } from "react";
import MyComponent from "./component/my-component";

const PageUseCallBack = (props) => {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    // useCallback
    const memoizedSetCountOne = useCallback(() => setCountOne(countOne + 1), [countOne])
    const memoizedSetCountTwo = useCallback(() => setCountTwo(countTwo + 1), [countTwo])

    // function
    // const memoizedSetCountOne = () => {
    //     setCountOne(countOne + 1)
    // }

    // const memoizedSetCountTwo = () => {
    //     setCountTwo(countOne + 1)
    // }

    return (
        <>
            {countOne} {countTwo}
            <MyComponent handleClick={memoizedSetCountOne} name="button1" />
            <MyComponent handleClick={memoizedSetCountTwo} name="button2" />
        </>
    )
}
export default PageUseCallBack;