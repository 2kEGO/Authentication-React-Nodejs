import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import React from 'react'

import './component _css/CreateTask.css'

export const CreateTask = ({toggle, toggleTask}) => {

  const toggleThis = () =>{
    toggleTask((prev) => !prev);
    console.log("Toggle state:", toggle);
  }

  return (
    <button onClick={toggleThis}>
        <FontAwesomeIcon icon={faPlus} />
        <h3>Add Task</h3>
    </button>
  )
}
