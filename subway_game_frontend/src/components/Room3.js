import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './room3.module.css';
import MusicButton from "./MusicButton";
import {Howler} from 'howler';

const Room3 = ({ LordProvost, character, updateRoomThreeStatus, music, musicIsPlaying, toggleMusic, sfx, tigerBalm, painKillers, pint, dram }) => {
  const [zombieHP, setZombieHP] = useState(LordProvost.health);
  const [characterHP, setCharacterHP] = useState(character.health);
  const [isCharacterAttacked, setIsCharacterAttacked] = useState(false); //good idea

  const [TigerBalmItem, setTigerBalmItem] = useState(tigerBalm.healthPoints);
  const [isTigerBalmUsed, setIsTigerBalmUsed] = useState(false);

  const [painKillersItem, setpainKillersItemItem] = useState(painKillers.healthPoints);
  const [ispainKillersItemUsed, setpainKillersItemUsed] = useState(false);

  const [pintItem, setPintItem] = useState(pint.healthPoints);
  const [isPintUsed, setIsPintUsed] = useState(false);

  const [dramItem, setDramItem] = useState(dram.healthPoints);
  const [isDramUsed, setIsDramUsed] = useState(false);

  const Navigate = useNavigate()

  const useTigerBalm = () => {
    if(isTigerBalmUsed == false){
    const updatedHealth = characterHP + TigerBalmItem;
    if(updatedHealth > 100){
      setCharacterHP(100);
      setIsTigerBalmUsed(true);
    }else{
    setCharacterHP(updatedHealth);
    setIsTigerBalmUsed(true);}
  } }

  const usePainKillers = () => {
    if(ispainKillersItemUsed == false){
      const updatedHealthPainKillers = characterHP + painKillersItem;
      if(updatedHealthPainKillers > 100){
        setCharacterHP(100)
        setpainKillersItemUsed(true);
      } else {
      setCharacterHP(updatedHealthPainKillers);
      setpainKillersItemUsed(true);}
    }
  }

  const usePint = () => {
    if(isPintUsed == false){
    const updatedHealth = characterHP + pintItem;
    if(updatedHealth > 100){
      setCharacterHP(100);
      setIsPintUsed(true);
    }else{
    setCharacterHP(updatedHealth);
    setIsPintUsed(true);}
  } }

  const useDram = () => {
    if(isDramUsed == false){
    const updatedHealth = characterHP + dramItem;
    if(updatedHealth > 100){
      setCharacterHP(100);
      setIsDramUsed(true);
    }else{
    setCharacterHP(updatedHealth);
    setIsDramUsed(true);}
  } }

  const handleAttackClick = () => {
    setTimeout(() => {
      sfx.playerAttack.play()
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
          sfx.lord.play()
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
      Howler.stop();
      Navigate('/failure') //real url
    }
  })

  useEffect(()=>{music.play()}, [])

  const musicToggle = () => {
    toggleMusic()
  }

    return ( 
        <div className={styles.room3div}>
                      <div className={styles.musicButtonDiv}>
                <MusicButton musicIsPlaying={musicIsPlaying} musicToggle={musicToggle}/>
            </div>
        
        <img src = "assets/KendokaV2.png" height= "700px" className={styles.playerSprite}/>

        <img src = "assets/LordProvost.png" height= "500px" className= {styles.zombieSprite}/>

        <button className={styles.buttonAttack} onClick={handleAttackClick}>ATTACK</button>

        <progress className={styles.playerHealth} value={characterHP} max="100"></progress>
        
        <progress className={styles.enemyHealth}  value={zombieHP} max="100"></progress>

        {isTigerBalmUsed ? 
          <img src="assets/TigerBalmEmpty.png" className={styles.tigerBalm} height="50px" width="50px" onClick={useTigerBalm}/> :
           <img src="assets/TigerBalmFull.png" className={styles.tigerBalm} height="50px" width="50px" onClick={useTigerBalm}/>
         }

         {ispainKillersItemUsed ?
         <img src="assets/painkiller-inactive.png" className={styles.pain} height="50px" width="50px" onClick={usePainKillers}/> :
         <img src="assets/painkiller-active.png" className={styles.pain} height="50px" width="50px" onClick={usePainKillers}/>
         }

        {isPintUsed ?
         <img src="assets/beer-inactive.png" className={styles.beer} height="50px" width="50px" onClick={usePint}/> :
         <img src="assets/beer-active.png" className={styles.beer} height="50px" width="50px" onClick={usePint}/>
         }

        {isDramUsed ?
         <img src="assets/whisky-inactive.png" className={styles.whisky} height="50px" width="50px" onClick={useDram}/> :
         <img src="assets/whiskey-active.png" className={styles.whisky} height="50px" width="50px" onClick={useDram}/>
         }
         
        </div>
     );
}
 
export default Room3;