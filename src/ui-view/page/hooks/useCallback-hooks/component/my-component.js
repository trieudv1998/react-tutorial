import React, { memo } from "react";

const MyComponent = (props) => {
    const { name, handleClick } = props;
    console.log(`${name} rendered`)
    return <button onClick={handleClick}>{name}</button>
}
export default memo(MyComponent)
