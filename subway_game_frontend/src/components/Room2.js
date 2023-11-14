import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './room2.module.css';


const Room2 = ({ BarrowlandsBallroomZombie, character, updateRoomTwoStatus, music }) => {
  const [zombieHP, setZombieHP] = useState(BarrowlandsBallroomZombie.health);
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
  //MARK WAS HERE
  // const handleAttackClick = () => {
  //   setTimeout(() => {
  //     const newZombieHP = zombieHP - character.attackPoints;
  //     setZombieHP(newZombieHP);
  //     setIsCharacterAttacked(true); // Signal that character attack is completed
  //   }, 1000);
  // };OLD CODE

  useEffect(() => {
    const handleZombieAttack = () => {
      if (isCharacterAttacked && zombieHP > 0) {
        setTimeout(() => {
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
      Navigate('/success');
      updateRoomTwoStatus(); //real url
    } else if (characterHP === 0 || characterHP < 0 ){
      Navigate('/failure') //real url
    }
  })

  useEffect(()=>{music.play()}, [])


    return ( 
        <div className={styles.room2div}>
         <img src = "assets/KendokaV2.png" height= "800px" className={styles.playerSprite}/>

          <img src = "assets/BBZombie.png" height= "500px" className= {styles.zombieSprite}/>

          <button className={styles.buttonAttack}  onClick={handleAttackClick}>ATTACK</button>

          <progress className={styles.playerHealth}  value={characterHP} max="100"> </progress>

         <progress className={styles.enemyHealth}  value={zombieHP} max="75"> </progress>

        </div>
     );
}
 
export default Room2;