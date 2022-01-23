import Link from "next/link";


const navbarItems = ["about", "features", "pricing", "work", "blog"]

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav">
          <div className="nav__logo">
            <Link href="/">
              <img src="/images/Home/website__logo.svg" alt="Website Logo"/>
            </Link>
          </div>
          <div className="nav__main">
            <ul className="nav__main--list">
              <li>
                <Link className="nav__main--list__link" href="/">Home</Link>
              </li>
              {navbarItems.map((item) => (
                <li>
                  <Link className="nav__main--list__link" href={`/${item}`}>{item}</Link>
                </li>
              ))}
            </ul>
            {/*----*/}
            {true ? (
              <div className="nav__main--sign">
                Sign In
              </div>
            ) : (
              <div className="nav__main--account">
                <img src="https://avatars.githubusercontent.com/u/76143018?v=4" alt="Account Img"/>
                <span>Umarkhon</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

