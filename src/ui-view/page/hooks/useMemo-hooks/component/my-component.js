
import React, { memo } from "react";

const MyComponentUseMemo = (props) => {
    const { content } = props;
    console.log('content', content);
    return (<p>{content}</p>);
}
export default memo(MyComponentUseMemo)