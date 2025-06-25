import List from "./List";
import InProgress from "./InProgress";
import ToDo from "./ToDo";
import Done from "./Done";
import CreateBtn from "./CreateBtn";
function Mainpage({ tasks, handleCreateTask, handleDeleteTask }) {
  return (
    <div className="board-screen">
      <List tasks={tasks} handleDeleteTask={handleDeleteTask} />
      <section className="tasks-control">
        <ToDo />
        <InProgress />
        <Done />
      </section>
      <section className="create-btn">
        <CreateBtn handleCreateTask={handleCreateTask} />
      </section>
    </div>
  );
}

export default Mainpage;
