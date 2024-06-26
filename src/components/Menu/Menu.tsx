import Image from "next/image";
import styles from "./Menu.module.css"

const Menu = () => {
    return (
        <nav className={styles.mainNav}>
            <div className={styles.navLogo}>
              <Image
                className={styles.logoImage}
                alt="logo image"
                src="/img/logo.png"
                height={17}
                width={114}
              />
            </div>
            <div className={styles.navBurger}>
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
            </div>
            <div className={styles.navMenu}>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <a href="#" className={styles.menuLink}>
                    Главное
                  </a>
                </li>
                <li className={styles.menuItem}>
                  <a href="#" className={styles.menuLink}>
                    Мой плейлист
                  </a>
                </li>
                <li className={styles.menuItem}>
                  <a href="../signin.html" className={styles.menuLink}>
                    Войти
                  </a>
                </li>
              </ul>
            </div>
          </nav>
    )
}

export default Menu;