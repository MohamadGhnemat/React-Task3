

import styles from './Navbar.module.css'; 

function Navbar() {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className='row'>
          <div className={styles.logoContainer}>
          
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <path d="M15.2132 0.472778H0.867258C0.818545 0.472778 0.778992 0.512505 0.778992 0.561513V14.3604C0.778992 14.4094 0.818545 14.4491 0.867258 14.4491H15.2132C15.2619 14.4491 15.3012 14.4094 15.3012 14.3604V0.561513C15.3012 0.512505 15.2619 0.472778 15.2132 0.472778Z" fill="#545BE8"/>
  <path d="M4.61714 3.54858V11.3733" stroke="white" strokeWidth="1.26926"/>
  <path d="M6.96184 3.54858V7.44616" stroke="white" strokeWidth="1.26685"/>
  <path d="M8.74799 3.54883V4.8727H10.9854L12.6084 8.22643H14.0698L11.7488 3.54883H8.74799Z" fill="white"/>
  <path d="M9.41281 6.30743V11.5287" stroke="white" strokeWidth="1.46628"/>
</svg>
      <a href="#">mangcoding Store</a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#" className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href="#">Course</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Article</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className={styles.authContainer}>
            <a href="#" className={styles.login}>
              Log in
            </a>
            <a href="#" className={styles.register}>
              Register
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
