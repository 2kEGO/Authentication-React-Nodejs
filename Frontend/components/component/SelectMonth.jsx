import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarWeek, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {format } from "date-fns";
import './component _css/SelectMonth.css'

function SelectMonth({currentDate, setCurrentDate}) {

    const increaseMonth = () => {
            setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
        };
    
    const decreaseMonth = () => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
    };
        
    return <>

        <div className="month-selection">

            <button onClick={decreaseMonth} className="selection-button">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            
            <div className="currentMonth-container">
                <FontAwesomeIcon icon={faCalendarWeek} />
                <h2>{format(currentDate, 'LLLL yyyy')}</h2>
            
            </div>
            <button onClick={increaseMonth} className="selection-button">
                <FontAwesomeIcon icon={faChevronLeft} rotation={180} />
            </button>
        </div>
    </>
}

export default SelectMonth;