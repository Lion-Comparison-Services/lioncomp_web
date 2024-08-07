import React from 'react';

const Button = ({ icon, name }) => {
    return (
        <div className='button-special'>
            {icon && <img src={icon} alt='icon' />}
            {name}
        </div>
    );
};

export default Button;