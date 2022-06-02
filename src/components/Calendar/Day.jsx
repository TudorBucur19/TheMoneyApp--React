import { useState } from 'react';
import Button from '../Common/Button/Button';
import styles from './Calendar.module.scss';

const Day = ({ day, onClick }) => {
    const [isVisible, setIsVisible] = useState(false);
    const isPaddingDay = day.value === 'padding';
    const { 
        daySquare, 
        daySquare_header, 
        daySquare_header_dayNo, 
        daySquare_header_action, 
        dayEvent, 
        paddingDay, 
        hidden, 
        visible,
    } = styles;

    return ( 
        <div 
        className={`${isPaddingDay && paddingDay} ${daySquare}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        >
            {!isPaddingDay && 
            <>
            <div className={daySquare_header}>
                <span className={daySquare_header_dayNo}>
                    {day.value}                
                </span>
                <div className={daySquare_header_action}>                    
                    <span className={isVisible && hidden}>
                        9800
                    </span>                        
                </div>
                <span className={`${isVisible && visible} ${hidden}`}>
                    <Button
                    children="+"
                    style="round"
                    />
                </span>
                
            </div>            
            </>
            }
        </div> 
    );
}
 
export default Day;