import {useState}  from 'react'

import styles from './About.module.css';
function About() {

  let [count,setCount] = useState(0)

const changeCount = () => {
 
    setCount(count+1);
  }


  return (
    <div className={styles.aboutSec}>
      <button className={styles.changeClr} onClick={changeCount}>count : {count}</button>
    </div>
  )
}

export default About
