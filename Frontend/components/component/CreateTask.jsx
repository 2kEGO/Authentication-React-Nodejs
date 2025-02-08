import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import React from 'react'

import './component _css/CreateTask.css'

export const CreateTask = () => {
  return (
    <button >
        <FontAwesomeIcon icon={faPlus} />
        <h3>Add Task</h3>
    </button>
  )
}
