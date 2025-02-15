import React from 'react'

const TaskNote = ({date}) => {
  return (
    <div style={{display: date? 'block':'none'}}>
      <input type="text" />
    </div>
  )
}

export default TaskNote