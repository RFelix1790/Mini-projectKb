function ToDo({ tasks, handleDeleteTask }) {
  return (
    <div className="todo-column">
      <h2 className="todo-column-title">To Do</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {tasks
          .filter((task) => task.status === "To Do")
          .map((task) => (
            <div key={task.id}>
              <h3>{task.title}</h3>
              <button onClick={() => handleDeleteTask(task.id)}>🗑️</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ToDo;
