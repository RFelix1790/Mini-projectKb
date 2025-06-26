function InProgress({ tasks, handleDeleteTask }) {
  return (
    <div className="inprogress-column">
      <h2 className="inprogress-column-title">In Progress</h2>
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
          .filter((task) => task.status === "In Progress")
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

export default InProgress;
