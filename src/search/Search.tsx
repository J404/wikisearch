import React, { useRef, MutableRefObject } from 'react';

interface Props {
    handleInput: (query: string) => void;
}

const Search: React.FC<Props> = props => {
    const inputRef = useRef<HTMLInputElement>(null) as MutableRefObject<HTMLInputElement>;

    return (
        <div className='Search'>
            <p>Search your query below: </p>
            <input ref={inputRef}
            onChange={() => props.handleInput(inputRef.current.value)}/>
        </div>
    );
}

export default Search;