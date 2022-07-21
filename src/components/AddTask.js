import { useState } from "react";
import React from "react";
import axios from "axios";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const {data: task} = await axios({
      method: "POST",
      url: "http://localhost:3001/app",
      data: {
        text,
        day,
        reminder,
      },
    });
    onAdd(task) 


    if(!text){
        alert('please add a task')
        return
    }

    setText('')
    setDay('')
    setReminder(false)
  };

  return (
    <form
      action="../..post"
      method="post"
      className="add-form"
      onSubmit={onSubmit}
    >
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form_control_check">
        <label>set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;