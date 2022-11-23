import React, { useRef } from "react";

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
            const txt = inputRef.current;
            alert(txt);
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h5 style={{marginRight: '10px'}}>Nhập dữ liệu:</h5>
                <input type="text" ref={inputRef} value={text} onChange={handleChange} />
                <p style={textError ? {color: 'red'} : {}}>{textError}</p>
            </div>
            <br />
            <button style={{ backgroundColor: '#4CAF50', border: 'none', color: 'white' }} onClick={onsubmit}>
                Submit
            </button>
        </div>
    )
}
export default Exercise2WithUseRef