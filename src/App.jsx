import "./App.css";
import Footer from "./components.jsx/Footer";
import NavBar from "./components.jsx/NavBar";
import SideBar from "./components.jsx/SideBar";
import Mainpage from "./components.jsx/Mainpage";

function App() {
  return (
    <>
      <nav className="navbar">
        <NavBar />
      </nav>
      <main className="main">
        <Mainpage />
        <SideBar />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
