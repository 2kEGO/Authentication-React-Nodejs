import { faEllipsisVertical, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import './component _css/ListTask.css'

const ListTask = ({ task, setTask, selectedDate }) => {

  
  const deleteTask = (index) => {
    const updateTask = task.filter((_, i) => i !== index);
    setTask(updateTask);
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

          {Array.isArray(selectedDate) && selectedDate.map((date, index) => (
            <div key={index} id="date-display">
              <FontAwesomeIcon icon={faClock} />
              <h4>{date}</h4>
            </div>
          ))}
            

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
