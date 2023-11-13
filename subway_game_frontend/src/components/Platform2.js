import React, {useEffect, useState} from 'react';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
// import characterOne from 'assets/characterOne.png';
// import '../components/Platform2.css';
  

const Platform2 = ({character}) => {
    
    const [name, setName] = useState(character.name)
    const [x, setX] = useState(0);
    
    
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
        let newPage = '/room2'
        if (x >= window.innerWidth){
            Navigate(newPage)
      }}, [x])

      return ( 
        <>
           <h1>{name}</h1>
          <img src = "assets/KendokaV2.png" height= "500px" id = "Sprite" style={{ marginLeft: `${x}px` }}></img> 
          <img src = "assets/CivilianMale.gif" height= "300px" id = "Runner" ></img>

          
        </>
    );
}
 
export default Platform2;