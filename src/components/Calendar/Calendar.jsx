import { useState, useEffect, Children } from 'react';

import styles from './Calendar.module.scss';
import CalendarHeader from './CalendarHeader';
import Day from './Day';

const Calendar = () => {
    const [nav, setNav] = useState(0);
    const [days, setDays] = useState([]);
    const [dateDisplay, setDateDisplay] = useState('');
    const [clicked, setClicked] = useState(null);
    const [events, setEvents] = useState(
        localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []
    );
    const weekdaysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const eventForDate = date => events.find(e => e.date === date);

    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events));
    }, [events]);
   
    useEffect(() => {
        const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        const dt = new Date();

        if (nav !== 0) {
            dt.setMonth(new Date().getMonth() + nav)
        };

        const day = dt.getDate();
        const month = dt.getMonth();
        const year = dt.getFullYear();

        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        });
        console.log(dateString);

        setDateDisplay(`${dt.toLocaleDateString('en-us', {month: 'long'})} ${year}`);
        const paddingDays = weekdays.indexOf(dateString.split(', ')[0].slice(0, 3).toLowerCase());
        console.log(paddingDays);
        const daysArray = [];

        for (let i = 1; i <= paddingDays + daysInMonth; i++) {
            const dayString = `${month + 1}/${i - paddingDays}/${year}`;

            if (i > paddingDays) {
                daysArray.push({
                    value: i - paddingDays,
                    event: eventForDate(dayString),
                    isCurrentDay: i - paddingDays === day && nav === 0,
                    date: dayString,
                })
            } else {
                daysArray.push({
                    value: 'padding',
                    event: null,
                    isCurrentDay: false,
                    date: '',
                }) 
            }
        }
        setDays(daysArray);

    }, [events, nav])

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
                onClick={() => {
                    if (day.value !== 'padding') {
                        setClicked(day.date);
                    }
                }}
                />
            ))}
        </div>
    </div> 
    );
}
 
export default Calendar;