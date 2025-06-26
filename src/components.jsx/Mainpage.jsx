import List from "./List";
import InProgress from "./InProgress";
import ToDo from "./ToDo";
import Done from "./Done";
import CreateBtn from "./CreateBtn";
function Mainpage({ tasks, handleCreateTask, handleDeleteTask }) {
  return (
    <div className="board-screen">
      {/* <List tasks={tasks} handleDeleteTask={handleDeleteTask} /> */}
      <section className="tasks-control">
        <ToDo tasks={tasks} handleDeleteTask={handleDeleteTask} className="todo-column" />
        <InProgress tasks={tasks} handleDeleteTask={handleDeleteTask} className="inProgress-column" />
        <Done tasks={tasks} handleDeleteTask={handleDeleteTask} className="done-column" />
      </section>
      <section className="create-btn">
        <CreateBtn
          handleCreateTask={handleCreateTask}
          className="add-task-form"
        />
      </section>
    </div>
  );
}

export default Mainpage;
