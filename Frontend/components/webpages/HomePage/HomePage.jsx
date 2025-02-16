import React, {useEffect, useState} from 'react';
import './HomePage.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleUp, faCalendar, faPaperclip, faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import {faNoteSticky} from '@fortawesome/free-regular-svg-icons'

import { CreateTask } from '../../component/CreateTask';
import ListTask from '../../component/ListTask';
import SelectMonth from '../../component/SelectMonth';
import Calendar from '../../component/Calendar';
import TaskNote from '../../component/TaskNote';




const HomePage = () => {

  const [selectedDate, setSelectedDate] = useState([])
  const [date, setDate] = useState([])

  const today = new Date();
''
  const [tasks, setTasks] = useState([""])
  const [newTask, setNewtask] = useState([""])

  const [toggle, toggleTask] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date());
  // const [date , note] = useState(false)

  // const [list, setList] = useState([""]);

  // function handleSwitch(){
  //   note((prev) => !prev)
  // }

  function addTask(){

    if(newTask.trim() !== '') {
      setTasks(t => [...t,newTask])
      setDate(d => [...d,selectedDate])
      
    }
  }

  const handleInputChange = (e) => {
    setNewtask(e.target.value)
  }

  return (
    <>
    <div className="mainpage">
      <div className="mainpage-left">
      </div>

      <div className="mainpage-right">
        <div className="mainpage-right-wrapper">

          {/* THIS WRAPPER IS TO SEPARATE ADD TASK AND LIST OF TASKS */}
          <div className="upper-wrapper">

            {/* KINDA LIKE DASHBOARD */}
            <div className="top-container">

              <div className="top-wrapper" id='top-wrapper-left'>
                <h1>Welcome to your To-Do List</h1>
                <h2>
                  Today,  
                  {today.toLocaleDateString('en-GB', { 
                  weekday: 'short',
                  month: 'short', 
                  day: '2-digit',
                  year: 'numeric'
                }).replace(/,/g, '')}
                </h2>
              </div>

              <div className="top-wrapper" id='top-wrapper-right'>
                <button id='top-wrapper-button'>
                  <FontAwesomeIcon icon={faAngleUp} id='button-icon'/>
                  <h3>Today</h3>
                </button>
              </div>

            </div>

            {/* LIST OF TASKS */}
            <div className="list-container">
               <ListTask task={tasks} setTask={setTasks} selectedDate={setSelectedDate} />
            </div>
          </div>

        </div>

      </div>
    </div>

    {/* ADD TASK SECTION STARTS HERE*/} 
      <div className="addTask-wrapper">
        <div className="addTask-container">

          {/* ADD TASK FORM */}
          <div className="addTask-form-wrapper" style={{ display: toggle ? "block" : "none" }}>

            <div className="addTask-form-container">

                {/* INPUT FOR NEW TASK */}
                <div className="addTask-form-item" id="item-1">
                  <span>
                    <FontAwesomeIcon icon={faPaperclip}/>
                  </span>
                  <input 
                    type="text" 
                    name="" 
                    placeholder='Create New Task' 
                    value={newTask}
                    onChange={handleInputChange}
                  />
                </div>

                {/* SELECT MONTH AND TOGGLE BETWEEN CALENDAR AND NOTE */}
                {/* <div className='addTask-form-item' id='item-2'>
                  <div className="form-button-container">
                    <select name="" id="">
                      <option value=""></option>
                    </select>
                    <button><FontAwesomeIcon icon={faCalendarDays} onClick={handleSwitch}/></button>
                    <button><FontAwesomeIcon icon={faNoteSticky} onClick={handleSwitch}/></button>
                  </div>
                </div> */}
                
                {/* TOGGLE MONTHS */}
                <div className="addTask-form-item" id='item-3'>
                  <SelectMonth currentDate={currentDate} setCurrentDate={setCurrentDate}/>
                </div>
                
                {/* MONTH, NOTE AND TIME */}
                <div className="addTask-form-item" id='item-4'>
                  <Calendar currentDate={currentDate} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                  <TaskNote/>
                </div>

                {/* TIME BUTTON AND ADD NEW TASK BUTTON */}
                <div className="addTask-form-item" id='item-5'>
                  <div className="button-container">
                    <button id='settime-button' >Set Time</button>
                    <button id='save-button' onClick={addTask}>Save Changes</button>
                  </div>
                </div> 

            </div>

          </div>

          {/* ADD TASK BUTTON */}
          <div className="addTask-button-container">
            <CreateTask toggle={toggle} toggleTask={toggleTask}/>
          </div>

        </div>
      </div>
    </>
    
  )
}

export default HomePage


