import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, onClick, colorScheme = false, disabled, type }) => {
    const { basicBtn, success, danger } = styles;

    const btnColor = {
        success: success,
        danger: danger
    }
    
    return ( 
        <button className={`${basicBtn} ${btnColor[colorScheme]}`} onClick={onClick} disabled={disabled} type={type}>
            {children}
        </button>
     );
}
 
export default Button;