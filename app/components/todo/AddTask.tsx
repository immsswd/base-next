import React from "react";

import { AddNewTask } from "../../../components/base/AddNewTask";

function AddTask() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="hidden">Add Task</h1>
      <AddNewTask />
    </div>
  );
}

export default AddTask;
