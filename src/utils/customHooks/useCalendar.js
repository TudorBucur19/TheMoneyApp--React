import { useState, useEffect } from "react";

const useCalendar = () => {
    const [nav, setNav] = useState(0);
    const [days, setDays] = useState([]);
    const [dateDisplay, setDateDisplay] = useState('');
    const [clicked, setClicked] = useState(null);
    // const [events, setEvents] = useState(
    //     localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []
    // );

    // const eventForDate = date => events.find(e => e.date === date);

    // useEffect(() => {
    //     localStorage.setItem('events', JSON.stringify(events));
    // }, [events]);
   
    useEffect(() => {
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dt = new Date();
        console.log(dt);
        console.log(dt.getFullYear());

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
        const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
        console.log(paddingDays);
        const daysArray = [];

        for (let i = 1; i <= paddingDays + daysInMonth; i++) {
            const dayString = `${month + 1}/${i - paddingDays}/${year}`;

            if (i > paddingDays) {
                daysArray.push({
                    value: i - paddingDays,
                    //event: eventForDate(dayString),
                    isCurrentDay: i - paddingDays === day && nav === 0,
                    date: dayString,
                })
            } else {
                daysArray.push({
                    value: 'padding',
                    //event: null,
                    isCurrentDay: false,
                    date: '',
                }) 
            }
        }
        setDays(daysArray);
    }, [nav]);

    return { nav, setNav, days, setDays, dateDisplay, setDateDisplay, clicked, setClicked };
}
 
export default useCalendar;