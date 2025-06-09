import samuraiImg from "../assets/samuraikb.png";
function Footer() {
  return (
    <>
      <a
        className="linkGit"
        href="https://github.com/RFelix1790/Mini-projectKb"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub repository
      </a>
      <div>
        <img src={samuraiImg} alt="samuraiImg" className="samuraiImg" />
      </div>
    </>
  );
}
export default Footer;
