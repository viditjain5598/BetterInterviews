import React, {useState, useEffect} from "react";
import FormInterview from "./Form";
import { Link } from "react-router-dom";

const NewInterview = ()=> {

  const [scheduledTime, setScheduledTime] = useState();
  const [endTime, setEndTime] = useState();
  const [title, setTitle] = useState();
  const [email, setEmail] = useState();

  useEffect(()=>{

    let data = {
      start: start,
      end: end,
      title: title,
      email: email,
    };

    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(`http://localhost:3000/interviews`, req)
      .then(res => res.json())
  });


  const handleSubmit = (e) =>{
    e.preventDefault();
  };

  return (
    <form onSubmit = {handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Start:
        <input
          type="datetime-local"
          value={start}
          onChange={(e) => setScheduledTime(e.target.value)}
        />
      </label>
      <label>
        End:
        <input
          type="datetime-local"
          value={end}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </label>
      <label>
        Enter Participant's Email
        <input
          type="text"
          value={pemail}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NewInterview;
