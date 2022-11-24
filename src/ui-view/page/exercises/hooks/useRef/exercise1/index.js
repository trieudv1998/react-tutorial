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

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                <Children ref={childRef} />
                <button onClick={() => showTextInChild()}>
                    Show Text in Child compoent
                </button>
                <p></p>
                <button onClick={increaseNumberInChild}>
                    Increase number in Child compoent
                </button>
            </div>
            {/* show my log */}
            <div style={{ flex: 1, backgroundColor: '#fff', width: "100%", height: '100vh', overflow: 'scroll', padding: '10px' }}>
            </div>
        </div >
    )
}
export default Exercise1WithUseRef