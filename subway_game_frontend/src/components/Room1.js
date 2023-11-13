import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Room1.css';

const Room1 = ({ KelvinBridgeZombie, character, updateRoomOneStatus, music }) => {
  const [zombieHP, setZombieHP] = useState(KelvinBridgeZombie.health);
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
      updateRoomOneStatus(); //real url
    } else if (characterHP === 0 || characterHP < 0 ){
      Navigate('/failure') //real url
    }
  })

  useEffect(()=>{music.play()}, [])


    return ( 
        <>
        <h1>I'm room 1</h1>
        <img src = "assets/KendokaV2.png" height= "400px" id="playerSprite"/>
        <img src = "assets/ZOMBIE.png" height= "300px" id="zombieSprite"/>
        <button className='buttonAttack' onClick={handleAttackClick}>ATTACK</button>
        <progress id="playerHealth" value={characterHP} max="100"> 32% </progress>
        <progress id="enemyHealth" value={zombieHP} max="50"> 32% </progress>
        </>
     );
}
 
export default Room1;