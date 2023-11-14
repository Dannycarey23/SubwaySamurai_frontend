import React from 'react';
import styles from './successFinalBoss.module.css';
import Map from './SubwayMap.gif';

 const SuccessFinalBoss = ({character, music}) => {
    return ( 
        <div className={styles.successDiv}>
            <h1 className={styles.successTitle}>Congratulations {character.name}!</h1>
            <p className={styles.successParagraph}>You have done your dojo proud {character.name} and now Glasgow can thank you for saving the entire city.</p>
            <img className={styles.map} src={Map} height= "400px" width="800px"></img>
        </div>
     );
 }
  
 export default SuccessFinalBoss;