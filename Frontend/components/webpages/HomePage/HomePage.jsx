import React, {useState} from 'react';
import './HomePage.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'




const HomePage = () => {

  const [task, setTask] = useState(["Hello"])

  
  return (
    <>
    <div className="mainpage">
      <div className="mainpage-left">
      </div>
      <div className="mainpage-right">
        <div className="mainpage-right-wrapper">

          <div className="top-container">

            <div className="top-wrapper" id='top-wrapper-left'>
              <h1>Welcome to your To-Do List</h1>
              <h2>date</h2>
            </div>

            <div className="top-wrapper" id='top-wrapper-right'>
              <button id='top-wrapper-button'>
                <FontAwesomeIcon icon={faAngleUp} id='button-icon'/>
                <h3>Today</h3>
              </button>
            </div>

          </div>

          <div className="list-container">
            <ol>
              {task.map((taskItem, index) => 
              <li key={index}>

                <div className="list-info" id='info-left'>
                  <input type="checkbox" />
                  <span>{taskItem}</span>
                </div>
        
                <div className="list-info" id='info-right'>
                  <div id='date-display'>
                    <FontAwesomeIcon icon={faClock} />
                    <h4>12.00</h4>
                    <span></span>
                    <h4>00.00</h4>                    
                  </div>
        
                  <button>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                </div>
        
              </li>)}
            </ol>
          </div>

          <div className="add-container"></div>
        </div>

      </div>
    </div>
    </>
    
  )
}

export default HomePage


