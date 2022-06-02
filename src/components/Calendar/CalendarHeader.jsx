import Button from '../Common/Button/Button';
import styles from './Calendar.module.scss';

const CalendarHeader = ({ nav, setNav, dateDisplay }) => {
    const { header, header_changeMonth, header_changeMonth_monthDisplay } = styles; 

    return ( 
        <div className={header}>
           
            <div className={header_changeMonth}>
                <Button children="<" colorScheme="success" onClick={() => setNav(nav -= 1)}/>
                <div className={header_changeMonth_monthDisplay}>{dateDisplay}</div>
                <Button children=">" colorScheme="success" onClick={() => setNav(nav += 1)}/>
            </div>
        </div>
     );
}
 
export default CalendarHeader;