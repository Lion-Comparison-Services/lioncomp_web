import React from 'react';

const ExpendableMessage = ({ title, message }) => {
    const [expand, setExpand] = React.useState(false)
    return (
        <div className='smart-item expandable-item'>
            <div className='message-wrapper'>
                <h4 onClick={() => setExpand(!expand)}>{title}</h4>
                {expand && <p>{message}</p>}
            </div>
        </div>
    );
};

export default ExpendableMessage;