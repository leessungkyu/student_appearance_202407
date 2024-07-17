import moment from 'moment';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

const CalendarApp = () => {
    const [value, onChange] = useState(new Date())
    return (
        <Calendar 
           calendarType='gregory'
           formatDay={(locale, date) => moment(date).format("DD")} 
           value={value}
        />
    )
}

export default CalendarApp;