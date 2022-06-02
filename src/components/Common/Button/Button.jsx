import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, onClick, colorScheme = false, disabled, type, style }) => {
    const { basicBtn, success, danger, round } = styles;

    const btnColor = {
        success: success,
        danger: danger
    }

    const btnStyle = {
        round: round,
        outlined: 'outlined'
    }
    
    return ( 
        <button className={`${basicBtn} ${btnColor[colorScheme]} ${btnStyle[style]}`} onClick={onClick} disabled={disabled} type={type}>
            {children}
        </button>
     );
}
 
export default Button;