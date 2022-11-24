import React, { useEffect, useRef } from "react";

const Exercise2WithUseRef = (props) => {
    const inputRef = useRef();
    const [text, setText] = React.useState("");
    const [textError, setTextError] = React.useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const isValidData = () => {
        if (!text) {
            //focus vào input khi text không có giá trị
            inputRef.current.focus();
            setTextError('Vui lòng nhập giá trị');
            return false
        }
        return true;
    }
    const onsubmit = () => {
        if (isValidData()) {
            setTextError('');
            console.log( "value", text );
        }
    }

    // window.console = {
    //     log: function (str) {
    //         var node = document.createElement("div");
    //         node.appendChild(document.createTextNode(str));
    //         document.getElementById("myLog").appendChild(node);
    //     }
    // }

    // (function () {
    //     if (!console) {
    //         console = {};
    //     }
    //     var logger = document.getElementById('myLog');
    //     console.log = function (message) {
    //         if (typeof message == 'object') {
    //             logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
    //         } else {
    //             logger.innerHTML += message + '<br />';
    //         }
    //     }
    // })();

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h5 style={{ marginRight: '10px' }}>Nhập dữ liệu:</h5>
                    <input type="text" ref={inputRef} value={text} onChange={handleChange} />
                    <p style={textError ? { color: 'red' } : {}}>{textError}</p>
                </div>
                <br />
                <button style={{ backgroundColor: '#4CAF50', border: 'none', color: 'white' }} onClick={onsubmit}>
                    Submit
                </button>
            </div>

            {/* show my log */}
            <div style={{ flex: 1, backgroundColor: '#fff', width: "100%", height: '100vh', overflow: 'scroll', padding: '10px' }}>
                <h2>Console Log</h2>
                <p id="myLog"></p>
            </div>
        </div >
    )
}
export default Exercise2WithUseRef