import Link from "next/link";
import { signIn } from "next-auth/react"

const navbarItems = ["home", "about-us", "features", "pricing", "faq", "blog"]
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
            <ul className="nav__list">
              {navbarItems.map((item) => (
                <li>
                  <Link href={`/${item}`}>{item}</Link>
                </li>
              ))}
            </ul>
            {false ? (
              <div>
                Sign In
              </div>
            ) : (
              <div className="nav__account">
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

