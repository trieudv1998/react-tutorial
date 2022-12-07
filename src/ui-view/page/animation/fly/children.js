import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const ChildrenComponent = (props) => {
    const ref = useRef();

    const [_dataCmp, _setDataCmp] = useState({
        isClicked: false,
        rect: {
            bottom: 0,
            right: 0,
        },
    })

    const dataCmp = _dataCmp;
    const setDataCmp = (data) => {
        Object.assign(dataCmp, { ...data });
        _setDataCmp({ ...dataCmp });
    };

    const clickHandler = () => {
        setDataCmp({
            isClicked: true,
        });
    }

    useEffect(() => {
        setDataCmp({
            rect: ref.current.getBoundingClientRect(),
        });
    }, []);



    const btnClass = `btn btn-primary ${dataCmp.isClicked ? 'btn-move-clicked' : 'btn-move'}`;
    const discClass = `moving-disc ${dataCmp.isClicked ? 'moving-disc-clicked' : ''}`;
    const bottom = `${dataCmp.rect.bottom}px`;
    const right = `${dataCmp.rect.right}px`;
    const discStyle = { bottom, right };

    return (
        <>
            <button
                ref={ref}
                className={btnClass}
                onClick={clickHandler}>
                Add to cart
            </button>
            {ref.current ?
                createPortal(
                    <img className={discClass} style={discStyle} src={`https://picsum.photos/id/${1}/60/60`} alt="..." />
                    , document.getElementById('movingDisc-cart'))
                : null
            }
        </>
    )
}
export default ChildrenComponent;