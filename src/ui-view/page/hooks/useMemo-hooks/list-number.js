import React, { memo, useMemo, useState } from 'react';

const PageListNumber = () => {
    const [length, setLength] = useState(0);

    return <div>
        <input style={{ color: 'black' }} type="text" placeholder="Nhập số" value={length} onChange={(e) => setLength(Number(e.target.value))} />

        <ListedAllNumber length={length} />
    </div>
};

const ListedAllNumber = ({ length }) => {
    console.log("calculating...");

    let numbers = useMemo(() => {
        let results = [];
        for (let i = 0; i < length; i++) {
            results.push(i);
        }

        return results;

    }, [length])

    return <ItemRender numbers={numbers} />
}

const ItemRender = React.memo(({ numbers }) => {
    console.log("numbers...");
    return <p>Listed number: {numbers.join(",")}</p>
})

export default PageListNumber;