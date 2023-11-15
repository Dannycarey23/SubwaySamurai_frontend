import React, {useEffect, useState} from 'react';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import styles from './platform3.module.css';
import MusicButton from "./MusicButton";
import { Howler } from 'howler';

const Platform3 = ({character, music, musicIsPlaying, toggleMusic}) => {
    
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
        let newPage = '/room3'
        if (x >= window.innerWidth -450){
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
        <div className={styles.platform3div}>
                      <div className={styles.musicButtonDiv}>
                <MusicButton musicIsPlaying={musicIsPlaying} musicToggle={musicToggle}/>
            </div>
          <div className={styles.bubble} contenteditable>
            <p>You have chanced your luck twice so, as they say, third time's the charm. This time you make it 3 stops without breaking down and you make it to the glorious city centre. Before you can walk five feet you are greeted by the heathen also known as the Lord Provost. Half zombie half human (this is what you trained for!)</p>
          </div>

          <img src = "assets/KendokaV2.png" height= "500px" className={styles.Sprite} style={{ marginLeft: `${x}px` }}></img>
          <img src = "assets/SittingProvost.png" height= "500px" className={styles.zombieSprite} style={{ marginLeft: `${x}px` }}></img>
        
        </div>

    
    );
}
 
export default Platform3;