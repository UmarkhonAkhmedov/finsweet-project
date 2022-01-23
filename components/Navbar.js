import Link from "next/link";

function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__logo">
          <Link href="/">
            <img src="/images/Home/website__logo.svg" alt="Website Logo"/>
          </Link>
        </div>
        <div className="nav__main">
          <div className="nav__list">

          </div>
          <div className="nav__account">

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

