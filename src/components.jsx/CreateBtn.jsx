import { useState } from "react";
const CreateBtn = ({ handleCreateTask }) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    assignee: "",
    status: "",
    priority: false,
    createdDate: "",
    dueDate: "",
  });
  function handleChanges(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevTask) => ({
      ...prevTask,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    handleCreateTask(formData);
    setFormData({
      id: "",
      title: "",
      description: "",
      assignee: "",
      status: "",
      priority: false,
      createdDate: "",
      dueDate: "",
    });
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <span>Add a new task</span>

      <div>
        <label>
          Title
          <input
            type="text"
            name="title"
            placeholder="title"
            value={formData.title}
            onChange={handleChanges}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            name="description"
            placeholder="description"
            value={formData.description}
            onChange={handleChanges}
          />
        </label>
        <label>
          Assignee
          <input
            type="text"
            name="assignee"
            placeholder="Assignee"
            value={formData.assignee}
            onChange={handleChanges}
          />
        </label>
        <label>
          Status
          <select
            name="status"
            value={formData.status}
            onChange={handleChanges}
          >
            <option value=""></option>
            <option value="To Do">To Do </option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <label>
          Priority
          <input
            type="checkbox"
            name="priority"
            checked={formData.priority}
            onChange={handleChanges}
          />
        </label>
        <label>
          Created Date
          <input
            type="date"
            name="createdDate"
            value={formData.createdDate}
            onChange={handleChanges}
          />
        </label>
        <label>
          Due Date
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChanges}
          />
        </label>
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default CreateBtn;
