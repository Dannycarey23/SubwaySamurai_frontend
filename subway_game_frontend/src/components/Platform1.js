import React, {useEffect, useState} from 'react';
import { Howler } from 'howler';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import styles from './platform1.module.css'
// import '../components/Platform1.css';
  

const Platform1 = ({character, music}) => {
    
    // const [name, setName] = useState(character.name)
    const [x, setX] = useState(0);
    console.log({character});
  
    
    
    const Navigate = useNavigate();

    useEffect(() => {
      function moveCharacter(e) {
        if (e.keyCode === 39) {
          setX((x) => x += 20);
          } else if (e.keyCode === 37) {
            setX((x) => x -= 20);
          }

        }
        document.addEventListener('keydown', moveCharacter);
    
        return () => {
          document.removeEventListener('keydown', moveCharacter);
        };
      }, []);

      useEffect(() => {
        let newPage = '/room1'
        if (x >= window.innerWidth - 450){
            Howler.stop()
            Navigate(newPage)
      }}, [x])

      const runners = [];

      const runnersCount = 6;

      for (let i = 0; i < runnersCount; i++) {
        runners.push({ 
          animationDuration: `${Math.random() * 5 + 3}s`, 
          bottom: `${Math.random() * 200}px`,
          right: `${Math.random() * 350 + 50}px`
        })
      }

      return ( 
        <>
        <div className={styles.platform1div}>
          <div className={styles.bubble} contenteditable> 
            <p>{character.name} enters the subway towards the city centre as it suddenly screams to a halt at Kelvin Bridge. Faint screams and growls echo around the subway chambers. Luckily you still have your trusty bamboo sword and armour. We all know weegies can fight so don’t take the zombies lightly.</p>
          </div>
          <img src = "assets/KendokaV2.png" height= "500px" className = {styles.Sprite} style={{ marginLeft: `${x}px` }}></img>
          {runners.map((runner) => (
            <img className={styles.runner} src = "assets/CivilianMale.gif" height= "300px" style={runner}></img>
          ))}
            </div>

        </>
    );
}
 
export default Platform1;
