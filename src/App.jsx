import "./App.css";
import Footer from "./components.jsx/Footer";
import NavBar from "./components.jsx/NavBar";
import SideBar from "./components.jsx/SideBar";
import Mainpage from "./components.jsx/Mainpage";
import tasksData from "./assets/data.json";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(tasksData);
  function handleCreateTask(newTask) {
    setTasks((prev) => [...prev, newTask]);
  }
  function handleDeleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }
  return (
    <>
      <nav className="navbar">
        <NavBar />
      </nav>
      <main className="main-container">
        <SideBar />
        <Mainpage
          tasks={tasks}
          handleCreateTask={handleCreateTask}
          handleDeleteTask={handleDeleteTask}
        />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
