
import styles from "./header.module.css";

import headerLogo from "../../images/logo_image.png";


const Header: React.FC = () => {
  return (
    // Use return here
    <header>
      <div className={styles.header}>
        <img
          className={styles.headerlogo}
          src={headerLogo}
          alt="headerlogo"
        />

        <nav className={styles.Nav}>
          <ul>
            <li className={styles.header_Nav_Li}>Home</li>
            <li className={styles.header_Nav_Li}>About</li>
            <li className={styles.header_Nav_Li}>Contact Us</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
