import React, {useEffect, useState} from 'react';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import '../components/Platform3.css';
  

const Platform3 = ({character, music}) => {
    
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
        let newPage = '/room3'
        if (x >= window.innerWidth){
          music.stop()
            Navigate(newPage)
      }}, [x])

      useEffect(()=>{
        music.play()
      }, [])

      return ( 
        <div id="platform3div">
          <h1>{name}</h1>
          <img src = "assets/KendokaV2.png" height= "500px" id = "Sprite" style={{ marginLeft: `${x}px` }}></img>
          <div class="bubble" contenteditable>You have chanced your luck twice so as they say, third times the charm. This time you make it 3 stops without breaking down and you make it to the glorious city centre. Before you can walk 5 feet you are greeted by the heathen also known as the Lord Provost. Half zombie half human (this is what you trained for!).
          </div>
        
        </div>

    
    );
}
 
export default Platform3;