import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Howl, Howler } from "howler";
import HomePage from '../components/HomePage';
import SuccessPage from '../components/SuccessPage';
import FailurePage from '../components/FailurePage';
import Platform1 from '../components/Platform1';
import Room1 from '../components/Room1';
import { Navigate } from 'react-router-dom';
import Room2 from '../components/Room2';
import Platform2 from '../components/Platform2';
import Platform3 from '../components/Platform3';
import Room3 from '../components/Room3';
import SuccessFinalBoss from '../components/SuccessFinalBoss';


const playerUrl = "/players";
const enemiesUrl = "/enemies";
const roomsUrl = "/rooms";
const healthUrl = "/healthItems"

const MainContainer = () => {
    const [enemies, setEnemies] = useState([]);
    const [player, setPlayer] = useState({});
    const [rooms, setRooms] = useState([]);  
    const [healthItems, setHealthItems] = useState([]);
    const [destination, setDestination] = useState("");
    
    const [completedRoomOne, setCompletedRoomOne] = useState(false);
    const [completedRoomTwo, setCompletedRoomTwo] = useState(false);
    const [completedRoomThree, setCompletedRoomThree] = useState(false);

    const [musicIsPlaying, setMusicIsPlaying] = useState(true)

    const updateRoomOneStatus = () => {
        setCompletedRoomOne(true);
        setDestination("Barrowlands")
    }

    const updateRoomTwoStatus = () => {
        setCompletedRoomTwo(true);
        setDestination("Buchanan Street")
    }

    const updateRoomThreeStatus = () => {
        setCompletedRoomThree(true);
    }

    useEffect(()=>{
        fetch(playerUrl)
        .then(res=>res.json())
        .then(data=>setPlayer(data[0]))

        fetch(enemiesUrl)
        .then(res=>res.json())
        .then(data=>setEnemies(data))

        fetch(roomsUrl)
        .then(res=>res.json())
        .then(data=>setRooms(data))

        fetch(healthUrl)
        .then(res=>res.json())
        .then(data=>setHealthItems(data))

        // function controlSound(e) {
        //     if (e.keyCode === 77) {
        //       Howler.mute(true);
        //     } else if (e.keyCode === 85) {
        //         Howler.mute(false);
        //     }
    
        //     }
        //     document.addEventListener('keydown', controlSound);
        
        //     return () => {
        //       document.removeEventListener('keydown', controlSound);
        //     };
        }, [])

    

    if (player.length === 0 || enemies.length === 0 || rooms.length === 0) {
        return <h1>Loading...</h1>
    }

    const KelvinBridgeZombie = enemies[0];
    const BarrowlandsBallroomZombie = enemies[1];
    const LordProvost = enemies[2];

    const tigerBalm = healthItems[0];
    const painKillers = healthItems[1];
    const pint = healthItems[2];
    const dram = healthItems[3];
  

    const updatePlayer = (character) => {
       
        if (character.id){
            
            return fetch(playerUrl + '/' + character.id,{
                method: "PUT",
                body: JSON.stringify(character),
                headers: {'Content-Type': 'application/json'}
            })
            .then(res => {
                setPlayer(character);
                console.log(character);
                return res.json()
            })
            
        } else {
            console.log("LOADING");
        }
    }

    const music = {
        platform: new Howl({
            src: ['assets/soundtrack.mp3'],
            loop: true,
            volume: 0.4
        }),
        fight: new Howl({
            src: ['assets/fight.mp3'],
            loop: true,
            volume: 0.4
        })}

    const sfx = {
        playerAttack: new Howl({
            src: ['assets/whoosh.mp3']
        }),
        zombieAttack: new Howl({
            src: ['assets/bite.mp3']
        }),
        train: new Howl({
            src: ['assets/train.mp3'],
        }),
        gameOver: new Howl({
            src: ['assets/gameover.mp3'],
            loop: true
        }),
        lord: new Howl({
            src: ['assets/lord.m4a'],
            volume: 2
    
        })
    }

    const toggleMusic = () => {
        if (musicIsPlaying) {
            setMusicIsPlaying(false)
        }
        else{
            setMusicIsPlaying(true)
        }
    }
    
    return (
        <Router>
            <Routes>

                <Route path='/' element={<HomePage character={player} updatePlayer={updatePlayer} music={music.platform} musicIsPlaying={musicIsPlaying} toggleMusic={toggleMusic}/>}/>
                <Route path='/platform1' element={<Platform1 character = {player} music={music.platform} musicIsPlaying={musicIsPlaying} toggleMusic={toggleMusic}/>}/>

                <Route path='/room1' element={<Room1 KelvinBridgeZombie={KelvinBridgeZombie} character={player} updateRoomOneStatus={updateRoomOneStatus} music={music.fight} sfx={sfx} toggleMusic={toggleMusic} musicIsPlaying={musicIsPlaying} tigerBalm={tigerBalm} painKillers={painKillers} pint={pint} dram={dram}/>}/>

                <Route path='/platform2' element={<Platform2 character = {player} music={music.platform} toggleMusic={toggleMusic} musicIsPlaying={musicIsPlaying}/>}/>

                <Route path='/room2' element={<Room2 BarrowlandsBallroomZombie={BarrowlandsBallroomZombie} character={player} updateRoomTwoStatus={updateRoomTwoStatus} music={music.fight} sfx={sfx} toggleMusic={toggleMusic} musicIsPlaying={musicIsPlaying} tigerBalm={tigerBalm} painKillers={painKillers} pint={pint} dram={dram}/>}/>

                <Route path='/platform3' element={<Platform3 character = {player} music={music.platform} musicIsPlaying={musicIsPlaying} toggleMusic={toggleMusic}/>}/>

                <Route path='/room3' element={<Room3 LordProvost={LordProvost} character={player} updateRoomThreeStatus={updateRoomThreeStatus} music={music.fight} sfx={sfx} toggleMusic={toggleMusic} musicIsPlaying={musicIsPlaying} tigerBalm={tigerBalm} painKillers={painKillers} pint={pint} dram={dram}/>}/>
               
                <Route path='/bigsuccess' element={<SuccessFinalBoss character={player} music={music.platform}/>}/>
                <Route path='/success' element={<SuccessPage character={player} completedRoomOne={completedRoomOne} completedRoomTwo={completedRoomTwo} destination={destination} sfx={sfx.train}/>}/>
                <Route path='/failure' element={<FailurePage character={player} completedRoomOne={completedRoomOne} completedRoomTwo={completedRoomTwo} sfx={sfx.gameOver}/>}/>

            </Routes>
        </Router>
    );
}
 
export default MainContainer;