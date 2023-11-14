import React, {useEffect, useState} from 'react';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
// import characterOne from 'assets/characterOne.png';
import styles from './platform2.module.css'
//import '../components/Platform2.css';
  

const Platform2 = ({character, music}) => {
    
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
        if (x >= window.innerWidth){
          music.stop()
            Navigate(newPage)
      }}, [x])

      useEffect(()=>{
        music.play()
      }, [])

      return ( 
        <div id="platform2div">
           <h1>{name}</h1>
          <img src = "assets/KendokaV2.png" height= "500px" id = "Sprite" style={{ marginLeft: `${x}px` }}></img> 
          <div className="zombieDiv"> 
            <img src = "assets/ZOMBIE.png" height= "300px"/>
          </div>
          <div class="bubble" contenteditable> The coast is clear so once again you jump on the Subway praying it doesn’t break down again. But surprise, your out of luck again . You leave the station bewildered but are met with the blinding lights of the Barrowlands. Your younger days flash back to you but you quickly refocus as you have a job to do.
        </div>
        </div>
    );
}
 
export default Platform2;