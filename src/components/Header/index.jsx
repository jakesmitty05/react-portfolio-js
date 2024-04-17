import coverImage from '../../assets/cover/cool-bg.png';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Jacob Smith</h1>
      <img src={coverImage} alt="geometric background"></img>
      {props.children}
    </header>
  );
}

export default Header;
