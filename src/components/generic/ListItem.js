import React from 'react';

const ListItem = ({ icon, name }) => {
    return (
        <li>
            {icon && <img src={icon} alt='icon' />}
            {name}
        </li>
    );
};

export default ListItem;