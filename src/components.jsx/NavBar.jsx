import samuraiImg from "../assets/samuraikb.png";
function NavBar() {
  return (
    <div>
      <img src={samuraiImg} className="samuraiImg" />
      <h1>Samurai Kanban Board</h1>;
    </div>
  );
}

export default NavBar;
