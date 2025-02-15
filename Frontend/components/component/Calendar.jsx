import "./component _css/Calendar.css"
import {eachDayOfInterval, endOfMonth, format, startOfMonth, getDay, isToday} from 'date-fns'
import { useState } from "react";
import {getFullYear, getMonth} from 'date-fns'


const Calendar = ({currentDate, date,selectedDate, setSelectedDate}) => {

    const firstOfMonth = startOfMonth(currentDate);
    const lastOfMonth = endOfMonth(currentDate);

    const daysInMonth = eachDayOfInterval({start: firstOfMonth, end: lastOfMonth});

    const firstDayIndex = getDay(firstOfMonth)

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


    const getDate = (e) => {
        const value = Number(e.target.textContent);

        const fullDate = format(new Date(currentDate.getFullYear(), currentDate.getMonth(), value), "yyyy-MM-dd");
        // setSelectedDate((prevDate) => (Array.isArray(prevDate) ? [...prevDate, value] : [value]));
        console.log(fullDate);
    };

    return (
    <>
        <div className="calendar" style={{display: date? 'none':'block'}}>
            
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
                        className={(isToday(day)) ? 'today': 'day-in-month'}
                        onClick={getDate}                        
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


