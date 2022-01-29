import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react"
import { signIn, signOut, useSession } from "next-auth/react"

export const navbarItems = ["about", "features", "pricing", "work", "blog", "contact"]

function Navbar() {
  const { data: session } = useSession()
  const [menu, setMenu] = useState()
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
              {navbarItems.map((item, id) => (
                <li key={id}>
                  <Link className="nav__main--list__link" href={`/${item}`}>{item}</Link>
                </li>
              ))}
              <CloseIcon className="nav__main--list__button"/>
            </ul>

            <div onClick={!session ? signIn : signOut}>
              <div className="nav__main--account">
                <div>
                  { session && (
                    <img className="nav__main--account__img" src={session.user.image}/>
                    
                  )}
                </div>
                <div>
                  {session ? (<span className="nav__main--account__span">{session.user.name}</span>) : (
                      <div className="nav__main--sign">
                        Sign In
                      </div>
                    )}
                </div>
              </div>
            </div>
            <div className="nav__main--menu">
              <MenuIcon className="nav__main--menu__icon"/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

