import React, {useEffect, useState} from 'react';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import styles from './platform2.module.css'
import { Howler } from 'howler';
import MusicButton from "./MusicButton";
  

const Platform2 = ({character, music, musicIsPlaying, toggleMusic}) => {
    
    const [name, setName] = useState(character.name)
    const [x, setX] = useState(0);
    
    const Navigate = useNavigate();

    useEffect(() => {
      function moveCharacter(e) {
        if (e.keyCode === 68) {
          setX((x) => x += 20);
          } else if (e.keyCode === 65) {
            setX((x) => x -= 20);
          }
        }
        document.addEventListener('keydown', moveCharacter);
        return () => {
          document.removeEventListener('keydown', moveCharacter);
        };
      }, []);

      useEffect(() => {
        let newPage = '/room2'
        if(x >= window.innerWidth -450){
          Howler.stop()
          Navigate(newPage)
        }}, [x])

      useEffect(()=>{
        music.play()
      }, [])

      const musicToggle = () => {
        toggleMusic()
      }

      return ( 
        <div className={styles.platform2div}>
            <div className={styles.musicButtonDiv}>
              <MusicButton musicIsPlaying={musicIsPlaying} musicToggle={musicToggle}/>
            </div>
          
            <div className={styles.bubble} contenteditable> 
              <p>The coast is clear so once again you jump on the Subway praying it doesn’t break down again. But surprise, you're out of luck again . You leave the station bewildered but are met with the blinding lights of the Barrowlands. Your younger days flash back to you but you quickly refocus as you have a job to do.</p>
            </div>

          <img src = "assets/KendokaV2.png" height= "500px" className = {styles.Sprite} style={{ marginLeft: `${x}px` }}></img> 
          
            <div className={styles.zombieDiv}>
              <img src = "assets/zombie2.gif" height= "300px" className={styles.bbZombie}/>
            </div>
        </div>
    );
}
 
export default Platform2;