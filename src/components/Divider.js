import React from 'react';
import styles from './Divider.module.scss';
import bg_left from '../imgs/background-left.png';
import bg_right from '../imgs/background-right.png';
import wiggle_top from '../imgs/wiggle-top.png';
import wiggle_bottom from '../imgs/wiggle-bottom.png';

function Divider(props) {
  return (
    <div className={styles.container} style={{backgroundColor:props.bgcolor}}>
   
   
        <div className={styles.content}>
        <div className={styles.top_wiggle} style={{backgroundImage:`url(${props.wiggle_top})`}}></div>

        <div className={styles.left} style={{backgroundImage:`url(${props.bg_left})`}}></div>
          <div className={styles.middle}>
                  <h3>there is an app for that </h3>
                  <h2>Got an Android? File in the App.</h2>
                  <p>We’re not just inventing a different kind of insurance company. We’re co-creating a future we’re excited to be apart of. Shaping a mindful place where people are seen as individuals instead of data sets. And where making good decisions has a quantifiable impact on wallets, the environment and the world around us. </p>
        
          </div>
          <div className={styles.right} style={{backgroundImage:`url(${props.bg_right})`}}></div>

          <div className={styles.bottom_wiggle} style={{backgroundImage:`url(${props.wiggle_bottom})`}}></div>
        </div>
       
    </div>
  );
}

export default Divider;
