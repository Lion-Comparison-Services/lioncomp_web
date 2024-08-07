import React from 'react';

const DropdownButton = ({ icon, name, children }) => {
    const [collupsed, setCollupsed] = React.useState(false)
    return (
        <li style={{ width: 300 }} onClick={() => setCollupsed(!collupsed)}>{name}
            {collupsed && <ul className="sub-menu-items">
                {children}
            </ul>}
        </li>
    );
};

export default DropdownButton;