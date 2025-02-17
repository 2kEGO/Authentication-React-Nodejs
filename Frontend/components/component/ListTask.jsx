import { faEllipsisVertical, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import './component _css/ListTask.css'
import { format } from 'date-fns';

const ListTask = ({ task, setTask, date, setDate}) => {

  const today = format(new Date(), 'mm/d')
  
  const deleteTask = (index) => {
    const updateTask = task.filter((_, i) => i !== index);
    const updateDate = date.filter((_, i) => i !== index);
    setTask(updateTask);
    setDate(updateDate);
  };

  return (  
    <ol>
      {task.map((taskItem, index) => (
        <li key={index}>
          <div className="list-info" id="info-left">
            <div className="info-left-wrapper">
              <input type="checkbox" onClick={() => deleteTask(index)}/>
              <h4>{taskItem}</h4>
            </div>
          </div>

          <div className="list-info" id="info-right">
            {date[index] && (
              <div id="date-display">
                <FontAwesomeIcon icon={faClock} />
                <h4>{date[index]}</h4>
              </div>
            )}

            <button>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default ListTask;
