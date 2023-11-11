import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import SuccessPage from '../components/SuccessPage';
import FailurePage from '../components/FailurePage';
import Platform1 from '../components/Platform1';
import Room1 from '../components/Room1';
import { Navigate } from 'react-router-dom';


const playerUrl = "/players";
const enemiesUrl = "/enemies";
const roomsUrl = "/rooms";

const MainContainer = () => {
    const [enemies, setEnemies] = useState([]);
    const [player, setPlayer] = useState([]);
    const [rooms, setRooms] = useState([]);  
    
    //levelChecks
    const [completedRoomOne, setCompletedRoomOne] = useState(false);
    const [completedRoomTwo, setCompletedRoomTwo] = useState(false);

    const updateRoomOneStatus = () => {
        setCompletedRoomOne(true);
    }

    const updateRoomTwoStatus = () => {
        setCompletedRoomTwo(true);
    }


    useEffect(()=>{
        fetch(playerUrl)
        .then(res=>res.json())
        .then(data=>setPlayer(data))

        fetch(enemiesUrl)
        .then(res=>res.json())
        .then(data=>setEnemies(data))

        fetch(roomsUrl)
        .then(res=>res.json())
        .then(data=>setRooms(data))
    }, [])

    if (player.length === 0 || enemies.length === 0 || rooms.length === 0) {
        return <h1>Loading...</h1>
    }

    
    
    const character = player[0];
    // console.log({characterInMain: character});

    const KelvinBridgeZombie = enemies[0];
    const BarrowlandsBallroomZombie = enemies[1];
    const LordProvost = enemies[2];
  

    const updatePlayer = (character) => {
        if (character.id){
            return fetch(playerUrl + '/' + character.id,{
                method: "PUT",
                body: JSON.stringify(character),
                headers: {'Content-Type': 'application/json'}
            })
            .then(res => {
                setPlayer(character);
                res.json()
            })
            
        } else {
            console.log("LOADING");
        }
    }
    
    return (
        <Router>
            <Routes>
                <Route path='/home' element={<HomePage character={character} updatePlayer={updatePlayer}/>}/>
                <Route path='/platform1' element={<Platform1 character = {character}/>}/>
                <Route path='/room1' element={<Room1 KelvinBridgeZombie={KelvinBridgeZombie} character={character} updateRoomOneStatus={updateRoomOneStatus}/>}/>
                <Route path='/success' element={<SuccessPage character={character} completedRoomOne={completedRoomOne}/>}/>
                <Route path='/failure' element={<FailurePage character={character}/>}/>
                {/* <Route path='/home' element={<HomePage/>}/>
                <Route path='/home' element={<HomePage/>}/> */}

            </Routes>
        </Router>
    );
}
 
export default MainContainer;