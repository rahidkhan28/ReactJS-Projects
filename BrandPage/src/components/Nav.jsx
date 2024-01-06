import "./App.css";

let Nav = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>

        <ul>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>

        <button>LOGIN</button>
      </nav>
    </div>
  );
};
export default Nav;
