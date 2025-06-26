import samuraiImg from "../assets/samuraikb.png";
function NavBar() {
  return (
    <div className="top-navbar">
      <div className="samuraiImg">
        <img src={samuraiImg} />
      </div>
      <div className="nav-title">
        <h1>Samurai Kanban Board</h1>
      </div>
    </div>
  );
}

export default NavBar;
