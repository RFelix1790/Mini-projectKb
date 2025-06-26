function Done({ tasks, handleDeleteTask }) {
  return (
    <div className="done-column">
      <h2 className="done-column-title">Done</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          width: "100%",
        }}
      >
        {tasks
          .filter((task) => task.status === "Done")
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

export default Done;
