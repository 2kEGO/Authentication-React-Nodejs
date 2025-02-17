import "./component _css/Calendar.css"
import {eachDayOfInterval, endOfMonth, format, startOfMonth, getDay, isToday} from 'date-fns'
import { useState } from "react";
import {getMonth} from 'date-fns'


const Calendar = ({currentDate, setNewDate}) => {

    const firstOfMonth = startOfMonth(currentDate);
    const lastOfMonth = endOfMonth(currentDate);

    const daysInMonth = eachDayOfInterval({start: firstOfMonth, end: lastOfMonth});

    const firstDayIndex = getDay(firstOfMonth)

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const getDate = (day) => {
        const newTaskDate = format(new Date(day), 'd - MMM')
        setNewDate(newTaskDate) 
    }

    return (
    <>
        <div className="calendar" >
            
            {/* Day in week SECTION */}
            <ul className='calendar-header'>
            {days.map((day,index) => (
                <li key={index}>{day}</li>
            ))}
            </ul>

            {/* Date SECTION */}
            <ul className='calendar-date'>
                {/* EMPTY DATE BEFORE START OF MONTH  */}
            {Array(firstDayIndex).fill(null).map((_,i) => 
                <li key={`empty-${i}`} className="empty"><button></button></li>
            )}
            
                {/* ACTUAL DATE IN THAT MONTH */}
            {daysInMonth.map((day,i) =>(
                <li key={`date-${i}`}>
                    <button 
                        className='day-in-month'
                        onClick={() => getDate(day)}                        
                        >{format(day, 'd')}
                    </button>
                </li>
            ))}

                {/* EMPTY DATE AFTER END OF MONTH */}
            {Array((7 - ((firstDayIndex + daysInMonth.length) % 7)) % 7)
                    .fill(null)
                    .map((_, i) => 
                <li key={`empty-end-${i}`} className="empty">
                    <button></button>
                </li>
            )}

            </ul>
        </div>

        
    </>

  )
};

export default Calendar


