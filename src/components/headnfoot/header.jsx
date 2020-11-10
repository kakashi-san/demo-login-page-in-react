import React from "react";
import styles from "./standardchartered-style.css"
export class Header extends React.Component {
  render() {
    return (
      <div id="masthead" className={styles.site_header}>
        <div className={styles.site_branding}>
          <a
            href="https://www.sc.com/en/"
            className={styles.custom_logo_link}
            rel="home"
          >
            <img
              width={256}
              height={96}
              src="./Personal, Business & Private Banking _ Standard Chartered_files/standardchartered@2x.png"
              className={styles.custom_logo}
              alt="Standard Chartered"
            />
          </a>
        </div>
        {}
        <nav id="site-navigation" className={styles.main_navigation}>
          <div className={styles.menu_main_menu_container}>
            <ul
              id="primary-menu"
              className="menu_nav_menu"
              aria-expanded="false"
            ></ul>
          </div>
        </nav>
        {}
        <div className="select_online">
          <a
            className="country-popup online-banking-popup"
            href="https://www.sc.com/en/#country-popup"
            data-location="online"
          >
            <span>Online banking </span>
          </a>
        </div>
        {}
      </div>
    );
  }
}

