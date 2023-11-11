import React, {useEffect, useState} from 'react';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import '../components/Platform1.css';
  

const Platform1 = ({character}) => {
    
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
        let newPage = '/room1'
        if (x >= window.innerWidth){
            Navigate(newPage)
      }}, [x])

      return ( 
        <>
        <h1>{name}</h1>
        <img src = "assets/KendokaV2.png" height= "500px" id = "Sprite" style={{ marginLeft: `${x}px` }}></img>
        </>
    );
}
 
export default Platform1;


//Jen was here