export default function Itemcard({ tasks, handleDeleteTask }) {
  return (
    <div>
      {tasks.map((task) => {
        let bgColor = "";
        if (task.status === "To Do") {
          bgColor = "red";
        } else if (task.status === "In Progress") {
          bgColor = "yellow";
        } else if (task.status === "Done") {
          bgColor = "green";
        }
        return (
          <div
            key={task.id}
            style={{
              border: "2px solid black",
              margin: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "5px",
              backgroundColor: bgColor,
            }}
          >
            <h3>{task.title}</h3>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
