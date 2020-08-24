import React from 'react';

interface Props {
    title: string;
    snippet: string;
}

const Result: React.FC<Props> = props => {
    return (
        <div className='Result'>
            <h4>{props.title}</h4>
            <div dangerouslySetInnerHTML={{ __html: props.snippet }}></div>
        </div>
    );
}

export default Result;