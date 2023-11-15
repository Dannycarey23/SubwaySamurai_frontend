import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './room3.module.css';

const Room3 = ({ LordProvost, character, updateRoomThreeStatus, music }) => {
  const [zombieHP, setZombieHP] = useState(LordProvost.health);
  const [characterHP, setCharacterHP] = useState(character.health);
  const [isCharacterAttacked, setIsCharacterAttacked] = useState(false); //good idea

  const Navigate = useNavigate()

  const handleAttackClick = () => {
    setTimeout(() => {
      const randomCharacterAttackPoints = Math.floor(Math.random() * 15) + 1; 
      const newZombieHP = zombieHP - randomCharacterAttackPoints;
      setZombieHP(newZombieHP);
      setIsCharacterAttacked(true); 
    }, 1000);
  };

  useEffect(() => {
    const handleZombieAttack = () => {
      if (isCharacterAttacked && zombieHP > 0) {
        setTimeout(() => {
          const randomZombieAttackPoints = Math.floor(Math.random() * 15) + 1; 
          const newCharacterHP = characterHP - randomZombieAttackPoints;
          setCharacterHP(newCharacterHP);
          setIsCharacterAttacked(false); 
        }, 1000);
      }
    };

    handleZombieAttack();
  }, [isCharacterAttacked, zombieHP, characterHP]);

  useEffect(() =>{
    if(zombieHP === 0 || zombieHP < 0){
      Navigate('/bigsuccess');
      updateRoomThreeStatus(); //real url
    } else if (characterHP === 0 || characterHP < 0 ){
      Navigate('/failure') //real url
    }
  })

  useEffect(()=>{music.play()}, [])

    return ( 
        <div className={styles.room3div}>
        
        <img src = "assets/KendokaV2.png" height= "700px" className={styles.playerSprite}/>

        <img src = "assets/LordProvost.png" height= "500px" className= {styles.zombieSprite}/>

        <button className={styles.buttonAttack} onClick={handleAttackClick}>ATTACK</button>

        <progress className={styles.playerHealth} value={characterHP} max="100"></progress>
        
        <progress className={styles.enemyHealth}  value={zombieHP} max="100"></progress>
        </div>
     );
}
 
export default Room3;