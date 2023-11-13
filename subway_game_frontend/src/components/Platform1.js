import React, {useEffect, useState} from 'react';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import '../components/Platform1.css';
  

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
            music.stop()
            Navigate(newPage)
      }}, [x])

      return ( 
        <>
        <div id="platform1div">
          <h1>{character.name}</h1>
          <img src = "assets/KendokaV2.png" height= "500px" id = "Sprite" style={{ marginLeft: `${x}px` }}></img>
          <div>
          <img id="zombieSprite" src = "assets/CivilianMale.gif" height= "300px"></img>
          </div>
        </div>
        </>
    );
}
 
export default Platform1;
