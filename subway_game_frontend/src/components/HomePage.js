import React, {useEffect, useState} from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import MusicButton from "./MusicButton";
import styles from './HomePage.module.css';

const HomePage = ({character, updatePlayer, music, musicIsPlaying, toggleMusic}) => {

    const [player, setPlayer] = useState(character)

    const Navigate = useNavigate()

    const changePage = () => {
        let newPage = '/platform1'
        Navigate(newPage)
    }

    const handleNameChange = (ev) => setPlayer({...player, name: ev.target.value})

    const handleSubmit = ev => {
        ev.preventDefault();
        updatePlayer({
            id: player.id,
            name: player.name,
            health: player.health,
            attackPoints: player.attackPoints
        }) 
        changePage();
    }

    useEffect(()=>{music.play()}, [])

    const musicToggle = () => {
        toggleMusic()
    }

    
    return (
        <div className={styles.homepageDiv}>
            <div className={styles.musicButtonDiv}>
                <MusicButton musicIsPlaying={musicIsPlaying} musicToggle={musicToggle}/>
            </div>
            <div className={styles.centeredDiv}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h1 className={styles.title}>SUBWAY SAMURAI</h1>
                    <p className={styles.subtitle}>The Provost Awakens</p>
                    <label htmlFor='name'></label>
                    <input 
                        type='text'
                        id='name'
                        placeholder="Enter player name"
                        required
                        onChange={handleNameChange}
                    />
                    <br></br>
                    <button className={styles.startButton} type="submit" name="submit" value="submit" onClick={handleSubmit}>START GAME</button>
                </form>
            </div>
        </div> 
     );
}
 
export default HomePage;


