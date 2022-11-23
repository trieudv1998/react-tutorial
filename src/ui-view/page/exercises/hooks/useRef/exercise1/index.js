import React, { useRef } from "react";
import Children from "./children";

const Exercise1WithUseRef = (props) => {
    const childRef = useRef();

    const showTextInChild = () => {
        const txt = childRef.current.returnText();
        alert(txt);
    }

    const increaseNumberInChild = () => {
        childRef.current.incrseaseNumber();
    };
    return (
        <div className="App">
            <Children ref={childRef} />
            <button onClick={showTextInChild}>
                Show Text in Child compoent
            </button>
            <p></p>
            <button onClick={increaseNumberInChild}>
                Increase number in Child compoent
            </button>
        </div>
    )
}
export default Exercise1WithUseRef