import React from "react";

function TaskItem({ id, taskName, taskStatus, onComplete, onDelete }) {
  return (
    <div class="mt-3 mb-3">
      <input
        checked={taskStatus}
        type="checkbox"
        class="mr-3"
        onChange={(e) => onComplete(id, e.target.checked)}
      />
      <span class="subtitle">{taskName}</span>
      <span class="is-pulled-right">
        <button class="delete" onClick={() => onDelete(id)}></button>
      </span>
    </div>
  );
}

export default TaskItem;
