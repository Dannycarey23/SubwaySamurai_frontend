import React, {useEffect, useState} from 'react';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import styles from './platform3.module.css';

const Platform3 = ({character, music}) => {
    
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
          music.stop()
            Navigate(newPage)
      }}, [x])

      useEffect(()=>{
        music.play()
      }, [])

      return ( 
        <div className={styles.platform3div}>
          <div className={styles.bubble} contenteditable>
            <p>You have chanced your luck twice so as they say, third times the charm. This time you make it 3 stops without breaking down and you make it to the glorious city centre. Before you can walk 5 feet you are greeted by the heathen also known as the Lord Provost. Half zombie half human (this is what you trained for!).</p>
          </div>

          <img src = "assets/KendokaV2.png" height= "500px" className={styles.Sprite} style={{ marginLeft: `${x}px` }}></img>
        
        </div>

    
    );
}
 
export default Platform3;