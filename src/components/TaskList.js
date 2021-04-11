import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

function TaskList({ localKey }) {
  const [list, setList] = useState([]);

  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    if (localStorage.getItem(localKey)) {
      setList(JSON.parse(localStorage.getItem(localKey)));
    } else {
      let tempTasks = [{ name: "Task 1" }, { name: "Task 2" }];
      setList(tempTasks);
      localStorage.setItem(localKey, JSON.stringify(tempTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localKey, JSON.stringify(list));
  }, [list]);

  const OnTaskDeletion = (id) => {
    setList(list.filter((val, index) => index !== id));
  };

  const AddNewItem = () => {
    setList([...list, { name: taskName }]);
    setTaskName("");
  };

  return (
    <div>
      <p className="control">
        <input
          className="input is-rounded"
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              AddNewItem();
            }
          }}
        />
        <div>
          {list.length === 0 && (
            <div class="has-text-centered m-4">No tasks found</div>
          )}
        </div>
        <div>
          {list.map((val, i) => (
            <TaskItem
              id={i}
              taskName={val.name}
              onComplete=""
              onDelete={(id) => OnTaskDeletion(id)}
            />
          ))}
        </div>
      </p>
    </div>
  );
}

export default TaskList;
