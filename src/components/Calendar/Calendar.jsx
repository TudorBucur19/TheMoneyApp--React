import { useDispatch } from 'react-redux';
import useCalendar from '../../utils/customHooks/useCalendar';
import CalendarHeader from './CalendarHeader';
import Day from './Day';
import { weekdaysNames } from '../../utils/configValues';
import styles from './Calendar.module.scss';
import { setDay } from '../../redux/ducks/clickedDay';

const Calendar = () => {
    const { nav, setNav, days, dateDisplay } = useCalendar();
    const dispatch = useDispatch();
    
    const dayClickHandler = (day) => {
        if (day.value !== 'padding') {
            dispatch(setDay(day.date))            
        }
    }

    const { container, container_weekdayNames, container_weekdayNames_dayName, container_calendar } = styles;    

    return ( 
    <div className={container}>
        <CalendarHeader {...{nav, setNav, dateDisplay}}/>
        
        <div className={container_weekdayNames}>            
            
            {weekdaysNames.map(day => (
                <div className={container_weekdayNames_dayName} key={day}>{day}</div>
            ))}
        </div>
        
        <div className={container_calendar}>
            {days.map((day, index) => (
                <Day
                key={index}
                day={day}
                onClick={() => dayClickHandler(day)}
                />
            ))}
        </div>
    </div> 
    );
}
 
export default Calendar;