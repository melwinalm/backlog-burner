import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

function TaskList({ localKey }) {
  const [list, setList] = useState([]);

  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    if (localStorage.getItem(localKey)) {
      setList(JSON.parse(localStorage.getItem(localKey)));
    } else {
      let tempTasks = [
        { name: "Task 1", isComplete: false },
        { name: "Task 2", isComplete: false }
      ];
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

  const OnTaskCompletion = (id, flag) => {
    setList(
      list.map((val, index) => {
        if (index === id) {
          val.isComplete = flag;
        }
        return val;
      })
    );
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
        <div style={{ overflowY: "auto" }}>
          {list.map((val, i) => (
            <TaskItem
              id={i}
              taskName={val.name}
              taskStatus={val.isComplete}
              onComplete={(id, flag) => OnTaskCompletion(id, flag)}
              onDelete={(id) => OnTaskDeletion(id)}
            />
          ))}
        </div>
      </p>
    </div>
  );
}

export default TaskList;
