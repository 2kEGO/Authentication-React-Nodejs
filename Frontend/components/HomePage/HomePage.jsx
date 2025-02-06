import React, {useState} from 'react'
import './HomePage.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleUp} from '@fortawesome/free-solid-svg-icons'
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'


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
              {task.map((task, index) => 
                <li key={index}>
                  <div className="list-info">
                    <input type="checkbox"/>
                    <span>{task}</span>
                  </div>
                  
                  <div className="list-info">
                    <button>time</button>
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