import React, { useMemo, useState } from 'react';

const users = [
    { id: 'a', name: 'Robin' },
    { id: 'b', name: 'Dennis' },
];

const PageListUser = () => {
    const [text, setText] = useState('');
    const [search, setSearch] = useState('');

    const handleText = (event) => {
        setText(event.target.value);
    };

    const handleSearch = () => {
        setSearch(text);
    };

    const filteredUsers = useMemo(() => users.filter((user) => {
        console.log('Filter function is running ...');
        return user.name.toLowerCase().includes(search.toLowerCase());
    }), [search]);

    return (
        <div>
            <input type="text" value={text} onChange={handleText} />
            <button type="button" onClick={handleSearch}>
                Search
            </button>

            <List list={filteredUsers} />
        </div>
    );
};

const List = React.memo(({ list }) => {
    console.log('list ...', list);

    return (
        <ul>
            {list.map((item) => (
                <ListItem key={item.id} item={item} />
            ))}
        </ul>
    );
});

const ListItem = ({ item }) => {
    return <li>{item.name}</li>;
};

export default PageListUser;