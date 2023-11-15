import React from 'react';
import styles from './successFinalBoss.module.css';

 const SuccessFinalBoss = ({character, music}) => {
    return ( 
        <div className={styles.successDiv}>
            <div className={styles.wrapper}>
                <h1 className={styles.successTitle}>Congratulations {character.name}!</h1>
                <p className={styles.successParagraph}>You have done your dojo proud {character.name} and now Glasgow can thank you for saving the entire city.</p>
            </div>
        </div>
     );
 }
  
 export default SuccessFinalBoss;