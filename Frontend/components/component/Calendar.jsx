import React, {useState, useEffect} from 'react'
import "./component _css/Calendar.css"
import {eachDayOfInterval, endOfMonth, format, startOfMonth, getDay, getMonth, setYear} from 'date-fns'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Calendar = () => {

    const [currentDate, setCurrentDate] = useState(new Date());


    const firstOfMonth = startOfMonth(currentDate);
    const lastOfMonth = endOfMonth(currentDate);

    const daysInMonth = eachDayOfInterval({start: firstOfMonth, end: lastOfMonth});

    const firstDayIndex = getDay(firstOfMonth)

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return (
    <>
        <div className="calendar">

            <ul className='calendar-header'>
            {days.map((day,index) => (
                <li key={index}>{day}</li>
            ))}
            </ul>

            <ul className='calendar-date'>
            {Array(firstDayIndex).fill(null).map((_,i) => 
                <li key={`empty-${i}`} className="empty"></li>
            )}
            

            {daysInMonth.map((day,i) =>(
                <li key={`date-${i}`}>{format(day, 'd')}</li>
            ))}
            </ul>
        </div>
    </>

  )
};

export default Calendar


