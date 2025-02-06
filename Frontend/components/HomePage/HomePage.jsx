import React from 'react'

const HomePage = () => {
  return (
    <>
    <div className="mainpage-left">
    </div>
    <div className="mainpage-right">
        <div className="top-container">
          <div className="top-wrapper" id='top-wrapper-left'>
            <h1>Welcome to your To-Do List</h1>
            <h2>date</h2>
          </div>
          <div className="top-wrapper" id='top-wrapper-right'>
            <div className="date-button">
              <button></button>
              <h4>Today</h4>
            </div>
          </div>
        </div>
        <div className="list-container"></div>
        <div className="add-container"></div>
    </div>
    </>
    
  )
}

export default HomePage