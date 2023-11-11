import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Room1.css';

const Room2 = ({ KelvinBridgeZombie, character, updateRoomTwoStatus }) => {
  const [zombieHP, setZombieHP] = useState(KelvinBridgeZombie.health);
  const [characterHP, setCharacterHP] = useState(character.health);
  const [isCharacterAttacked, setIsCharacterAttacked] = useState(false); //good idea

  const Navigate = useNavigate()

  const handleAttackClick = () => {
    setTimeout(() => {
      const newZombieHP = zombieHP - character.attackPoints;
      setZombieHP(newZombieHP);
      setIsCharacterAttacked(true); // Signal that character attack is completed
    }, 1000);
  };

  useEffect(() => {
    const handleZombieAttack = () => {
      if (isCharacterAttacked && zombieHP > 0) {
        setTimeout(() => {
          const newCharacterHP = characterHP - KelvinBridgeZombie.attackPoints;
          setCharacterHP(newCharacterHP);
          setIsCharacterAttacked(false); // Reset the signal for the next round
        }, 1000);
      }
    };

    handleZombieAttack();
  }, [isCharacterAttacked, zombieHP, characterHP, KelvinBridgeZombie.attackPoints]);

  useEffect(() =>{
    if(zombieHP === 0 || zombieHP < 0){
      Navigate('/success');
      updateRoomTwoStatus(); //real url
    } else if (characterHP === 0 || characterHP < 0 ){
      Navigate('/failure') //real url
    }
  })


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
 
export default Room2;