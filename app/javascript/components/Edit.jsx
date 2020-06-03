import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Edit = () => {
  const [scheduleTime, setScheduleTime] = useState();
  const [endTime, setEndTime] = useState();
  const [title, setTitle] = useState();
  const [email, setEmail] = useState();
  
  useEffect(() => {
    const data = {
      start: start,
      end: end,
      title: title,
      email: email,
    };

    const req = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(`http://localhost:3000/interviews`, req).then((res) => res.json());
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted form");
  };

  return (
    <form onSubmit={handleSubmit}>
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
          onChange={(e) => setStart(e.target.value)}
        />
      </label>
      <label>
        End:
        <input
          type="datetime-local"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
      </label>
      <label>
        Enter Participant's Email
        <input
          type="text"
          value={pemail}
          onChange={(e) => setPemail(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Edit;
