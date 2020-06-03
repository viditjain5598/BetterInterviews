import React from 'react'
import Server from "./Config"
import Home from './Home'

const FormInterview = ()=>{
  return (
    <div>
      <div className="field">
        <p>Title</p>
        <input className="input" id="title" placeholder="Enter Title of the Interview" />
      </div>
      <div className="field">
        <p>Start Time</p>
        <input
          type="datetime-local"
          id="start"
          placeholder="Enter Start Timeof the Interview"
        />
      </div>
      <div className="field">
        <p>End Time</p>
        <input type="datetime-local" id="end" placeholder="Enter End Time of the Interview" />
      </div>
      <div className="field">
        <p>Enter Participants</p>
        <input
          className="input"
          id="p-email"
          placeholder="Enter Participants"
        />
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default FormInterview;