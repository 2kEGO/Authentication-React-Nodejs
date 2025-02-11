import React, {useEffect, useState} from 'react';
import './HomePage.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleUp, faNoteSticky, faCalendar} from '@fortawesome/free-solid-svg-icons';


import { CreateTask } from '../../component/CreateTask';
import ListTask from '../../component/ListTask';
import SelectMonth from '../../component/SelectMonth';
import Calendar from '../../component/Calendar';



const HomePage = () => {

  const [task, setTask] = useState(["Get fucked"])
  const [toggle, toggleTask] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date());

  const [list, setList] = useState("[]");

  // const toggleThis = () =>{
  //   toggleTask((prev) => !prev);
  // }

  
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
                <h2>date</h2>
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
               <ListTask task={task}/>
            </div>
          </div>


          
        </div>

      </div>
    </div>

    {/* ADD TASK SECTION STARTS HERE*/} 
    <div className="addTask-wrapper">
      <div className="addTask-container">

        {/* ADD TASK FORM */}
        <div id="addTask-form-wrapper" >

          <div className="addTask-form-container">

              <div className="addTask-form-item" id="item-1">
                <img src={list} alt="" />
                <input type="text" name="" />
              </div>

              <div className='addTask-form-item' id='item-2'>
                <select name="" id="">
                  <option value=""></option>
                </select>
                <button><FontAwesomeIcon icon={faCalendar} /></button>
                <button><FontAwesomeIcon icon={faNoteSticky} /></button>
              </div>

              <div className="addTask-form-item" id='item-3'>
                <SelectMonth currentDate={currentDate} setCurrentDate={setCurrentDate}/>
              </div>

              <div className="addTask-form-item" id='item-4'>
                <Calendar currentDate={currentDate}/>
              </div>

              <div className="addTask-form-item" id='item-5'>
                <div className="button-container">
                  <button id='settime-button'>Set Time</button>
                  <button id='save-button'>Save Changes</button>
                </div>
              </div>

          </div>

        </div>

        {/* ADD TASK BUTTON */}
        <div className="addTask-button-container">
          <CreateTask />
        </div>

      </div>
    </div>
    </>
    
  )
}

export default HomePage


