import React from 'react';
import styles from '../../styles/Sidebar.module.css'

const SidebarTest = () => {
  return (
    <>
<>
 
  <link
    href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
    rel="stylesheet"
  />
  <div className={`${styles.sidebar} ${styles.close}`}>
    <div className={styles.logoDetails}>
      <i className="bx bxl-c-plus-plus" />
      <span className={styles.logo_name}>CodingLab</span>
    </div>
    <ul className={styles.navLinks}>
      <li>
        <a href="#">
          <i className="bx bx-grid-alt" />
          <span className={styles.link_name}>Dashboard</span>
        </a>
        <ul className={`${styles.subMenu}, ${styles.blank}`}>
          <li>
            <a className={styles.link_name} href="#">
              Category
            </a>
          </li>
        </ul>
      </li>
      <li>
        <div className={styles.link_name}>
          <a href="#">
            <i className="bx bx-collection" />
            <span className={styles.link_name}>Category</span>
          </a>
          <i className="bx bxs-chevron-down arrow" />
        </div>
        <ul className={styles.subMenu}>
          <li>
            <a className={styles.link_name} href="#">
              Category
            </a>
          </li>
          <li>
            <a href="#">HTML &amp; CSS</a>
          </li>
          <li>
            <a href="#">JavaScript</a>
          </li>
          <li>
            <a href="#">PHP &amp; MySQL</a>
          </li>
        </ul>
      </li>
      <li>
        <div className={styles.iocnLink}>
          <a href="#">
            <i className="bx bx-book-alt" />
            <span className={styles.link_name}>Posts</span>
          </a>
          <i className="bx bxs-chevron-down arrow" />
        </div>
        <ul className={styles.subMenu}>
          <li>
            <a className={styles.link_name} href="#">
              Posts
            </a>
          </li>
          <li>
            <a href="#">Web Design</a>
          </li>
          <li>
            <a href="#">Login Form</a>
          </li>
          <li>
            <a href="#">Card Design</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-pie-chart-alt-2" />
          <span className={styles.link_name}>Analytics</span>
        </a>
        <ul className={`${styles.subMenu} ${styles.blank}`}>
          <li>
            <a className={styles.link_name} href="#">
              Analytics
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-line-chart" />
          <span className={styles.link_name}>Chart</span>
        </a>
        <ul className={`${styles.subMenu} ${styles.blank}`}>
          <li>
            <a className={styles.link_name} href="#">
              Chart
            </a>
          </li>
        </ul>
      </li>
      <li>
        <div className={styles.link_name}>
          <a href="#">
            <i className="bx bx-plug" />
            <span className={styles.link_name}>Plugins</span>
          </a>
          <i className="bx bxs-chevron-down arrow" />
        </div>
        <ul className={styles.subMenu}>
          <li>
            <a className={styles.link_name} href="#">
              Plugins
            </a>
          </li>
          <li>
            <a href="#">UI Face</a>
          </li>
          <li>
            <a href="#">Pigments</a>
          </li>
          <li>
            <a href="#">Box Icons</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-compass" />
          <span className={styles.link_name}>Explore</span>
        </a>
        <ul className={`${styles.subMenu} ${styles.blank}`}>
          <li>
            <a className={styles.link_name} href="#">
              Explore
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-history" />
          <span className={styles.link_name}>History</span>
        </a>
        <ul className={`${styles.subMenu} ${styles.blank}`}>
          <li>
            <a className={styles.link_name} href="#">
              History
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-cog" />
          <span className={styles.link_name}>Setting</span>
        </a>
        <ul className={`${styles.subMenu} ${styles.blank}`}>
          <li>
            <a className={styles.link_name} href="#">
              Setting
            </a>
          </li>
        </ul>
      </li>
      <li>
        <div className={styles.profileDetails}>
          <div className={styles.profileContent}>
            {/*<img src="image/profile.jpg" alt="profileImg">*/}
          </div>
          <div className={styles.nameJob}>
            <div className={styles.profile_name}>Prem Shahi</div>
            <div className={styles.job}>Web Desginer</div>
          </div>
          <i className="bx bx-log-out" />
        </div>
      </li>
    </ul>
  </div>
  <section className={styles.homeSection}>
    <div className={styles.homeContent}>
      <i className={`${styles.bx} ${styles.bxMenu}`}/>
      <span className={styles.text}>Drop Down Sidebar</span>
    </div>
  </section>
</>

    
    </>
  )
}

export default SidebarTest