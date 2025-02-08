import React, {useState} from 'react'
import "./component _css/Calendar.css"
import {eachDayOfInterval, endOfMonth, format, startOfMonth} from 'date-fns'

const Calendar = () => {

    const currentDate = new Date();
    const firstOfMonth = startOfMonth(currentDate);
    const lastOfMonth = endOfMonth(currentDate);

    const daysInMonth = eachDayOfInterval({start: firstOfMonth, end: lastOfMonth});

    const dates = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December']
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


    return (
    <>
        <div className="calendar-day">
            <ul>
            {days.map((day,index) => (
                <li key={index}>{day}</li>
            ))}
            </ul>
            <ul>
            
            </ul>
        </div>
    </>

  )
};

export default Calendar