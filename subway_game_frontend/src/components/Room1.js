import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './room1.module.css';
import {Howler} from 'howler';

const Room1 = ({ KelvinBridgeZombie, character, updateRoomOneStatus, music, sfx }) => {
  const [zombieHP, setZombieHP] = useState(KelvinBridgeZombie.health);
  const [characterHP, setCharacterHP] = useState(character.health);
  const [isCharacterAttacked, setIsCharacterAttacked] = useState(false); //good idea

  const Navigate = useNavigate()

  const handleAttackClick = () => {
    setTimeout(() => {
      sfx.playerAttack.play()
      const randomCharacterAttackPoints = Math.floor(Math.random() * 15) + 1; 
      const newZombieHP = zombieHP - randomCharacterAttackPoints;
      setZombieHP(newZombieHP);
      setIsCharacterAttacked(true); 
    }, 1000);
  }; //Mark was here

  // const handleAttackClick = () => {
  //   setTimeout(() => {
  //     const newZombieHP = zombieHP - character.attackPoints;
  //     setZombieHP(newZombieHP);
  //     setIsCharacterAttacked(true); // Signal that character attack is completed
  //   }, 1000);
  // }; OLD CODE

  useEffect(() => {
    const handleZombieAttack = () => {
      if (isCharacterAttacked && zombieHP > 0) {
        setTimeout(() => {
          sfx.zombieAttack.play()
          const randomZombieAttackPoints = Math.floor(Math.random() * 20) + 1; 
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
      Howler.stop();
      Navigate('/success');
      updateRoomOneStatus(); //real url
    } else if (characterHP === 0 || characterHP < 0 ){
      Navigate('/failure') //real url
    }
  })

  useEffect(()=>{music.play()}, [])


    return ( 
        <div className={styles.room1div}>
          <img src = "assets/KendokaV2.png" height= "800px" className={styles.playerSprite}/>
          <img src = "assets/ZOMBIE.png" height= "600px" className={styles.zombieSprite}/>
          <button className={styles.buttonAttack} onClick={handleAttackClick}>ATTACK</button>
          <progress className={styles.playerHealth} value={characterHP} max="100"></progress>
          <progress className={styles.enemyHealth} value={zombieHP} max="50"></progress>
        </div>
     );
}
 
export default Room1;