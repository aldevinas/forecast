import React from 'react';

import styles from './Header.module.css';

const Header = () => (
  <div>
    <h1 className={styles.heading}>
      <span className={styles.light}>Weather</span> Forecast
    </h1>
    <h3 className={styles.h3}>Search works for major cities like Rome, London, Rio etc.</h3>
  </div>
    
);

export default Header;
