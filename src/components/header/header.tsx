
import styles from "./header.module.css";

import headerLogo from "../../images/logo_image.png";
import { Link, NavLink } from "react-router-dom";


const Header: React.FC = () => {

  const handleActiveNav = ({ isActive }: { isActive: boolean }) => {
    return isActive ? styles["active_nav"] : styles["no_active_nav"];
  };



  return (
    // Use return here
    <header>
      <div className={styles.header}>
        <Link to="/">
          <img
            className={styles.headerlogo}
            src={headerLogo}
            alt="headerlogo"
          />
        </Link>

        <nav className={styles.Nav}>
          <ul>
            <NavLink to="/" className={handleActiveNav}>
              Home
            </NavLink>

            <NavLink to="about" className={handleActiveNav}>
              About Us
            </NavLink>

            <NavLink to="contact us" className={handleActiveNav}>
              Contact Us
            </NavLink>

            <NavLink to="/ka/home" >
              GEO
            </NavLink>

            <NavLink to="/en/home" >
              ENG
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
