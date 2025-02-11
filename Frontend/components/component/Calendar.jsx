import React, {useState, useEffect} from 'react'
import "./component _css/Calendar.css"
import {eachDayOfInterval, endOfMonth, format, startOfMonth, getDay, getMonth, setYear, isToday} from 'date-fns'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Calendar = ({currentDate}) => {


    const firstOfMonth = startOfMonth(currentDate);
    const lastOfMonth = endOfMonth(currentDate);

    const daysInMonth = eachDayOfInterval({start: firstOfMonth, end: lastOfMonth});

    const firstDayIndex = getDay(firstOfMonth)

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return (
    <>
        <div className="calendar">
            
            {/* Day SECTION */}
            <ul className='calendar-header'>
            {days.map((day,index) => (
                <li key={index}>{day}</li>
            ))}
            </ul>

            {/* Date SECTION */}
            <ul className='calendar-date'>
            {Array(firstDayIndex).fill(null).map((_,i) => 
                <li key={`empty-${i}`} className="empty"></li>
            )}
            

            {daysInMonth.map((day,i) =>(
                <li 
                    className={(isToday(day)) ? 'today': 'day-in-month'} 
                    key={`date-${i}`}
                    >{format(day, 'd')}
                </li>
            ))}

            {Array((7 - ((firstDayIndex + daysInMonth.length) % 7)) % 7)
                    .fill(null)
                    .map((_, i) => 
                <li key={`empty-end-${i}`} className="empty"></li>
        )}

            </ul>
        </div>
    </>

  )
};

export default Calendar


