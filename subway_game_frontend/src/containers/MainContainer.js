import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Howl } from "howler";
import { Navigate } from 'react-router-dom';

import HomePage from '../components/HomePage';
import SuccessPage from '../components/SuccessPage';
import FailurePage from '../components/FailurePage';
import Room1 from '../components/Room1';
import Room2 from '../components/Room2';
import Room3 from '../components/Room3';
import Platform1 from '../components/Platform1';
import Platform2 from '../components/Platform2';
import Platform3 from '../components/Platform3';
import MusicButton from '../components/MusicButton';


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
    const [completedRoomThree, setCompletedRoomThree] = useState(false);

    // const [musicIsPlaying, setMusicIsPlaying] = useState(false)

    const updateRoomOneStatus = () => {
        setCompletedRoomOne(true);
    }

    const updateRoomTwoStatus = () => {
        setCompletedRoomTwo(true);
    }

    const updateRoomThreeStatus = () => {
        setCompletedRoomThree(true);
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

    const music = {
        platform: new Howl({
            src: ['assets/soundtrack.mp3'],
            loop: true
        }),
        fight: new Howl({
            src: ['assets/fight.mp3'],
            loop: true
        })}

    // const soundOn = ()=>{
    //     setMusicIsPlaying(true)
    // }
    // const soundOff = ()=>{
    //     setMusicIsPlaying(false)
    // }

    // const playPlatformMusic = ()=>{
    //     music.platform.play()
    // }
    // const stopPlatformMusic = ()=>{
    //     music.platform.stop()
    // }

    // const playFightMusic = ()=>{
    //     music.fight.play()
    // }
    // const pauseFightMusic = ()=>{
    //     music.fight.pause()
    // }


    
    return (
        <Router>
            {/* <button onClick={pauseFightMusic}>Stop Fight Music</button>
            <button onClick={playFightMusic}>Play Fight Music</button> */}
            <Routes>
                <Route path='/' element={<HomePage character={character} updatePlayer={updatePlayer} music={music.platform}/>}/>
                <Route path='/platform1' element={<Platform1 character = {character} music={music.platform}/>}/>
                <Route path='/room1' element={<Room1 KelvinBridgeZombie={KelvinBridgeZombie} character={character} updateRoomOneStatus={updateRoomOneStatus} music={music.fight}/>}/>
                <Route path='/platform2' element={<Platform2 character = {character}  music={music.platform}/>}/>
                <Route path='/room2' element={<Room2 KelvinBridgeZombie={KelvinBridgeZombie} character={character} updateRoomTwoStatus={updateRoomTwoStatus} music={music.fight}/>}/>
                <Route path='/platform3' element={<Platform3 character = {character} music={music.platform}/>}/>
                <Route path='/room3' element={<Room3 KelvinBridgeZombie={KelvinBridgeZombie} character={character} updateRoomThreeStatus={updateRoomThreeStatus} music={music.fight}/>}/>

                <Route path='/success' element={<SuccessPage character={character} completedRoomOne={completedRoomOne} completedRoomTwo={completedRoomTwo}/>}/>
                <Route path='/failure' element={<FailurePage character={character}/>}/>
                {/* <Route path='/home' element={<HomePage/>}/>
                <Route path='/home' element={<HomePage/>}/> */}

            </Routes>
        </Router>
    );
}
 
export default MainContainer;

// this was passed as props to Music Button:  soundOff={soundOff} soundOn={soundOn}  musicIsPlaying={musicIsPlaying}
// and this was passed to rooms: playFightMusic={playFightMusic} instead of music={music.fight}