import React, {useEffect, useState} from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import MusicButton from "./MusicButton";
import styles from './HomePage.module.css';
// import '../components/HomePage.css';

const HomePage = ({character, updatePlayer, music}) => {

    const [player, setPlayer] = useState(character)

    const Navigate = useNavigate()

    // useEffect(() => {
    //     function updateNameAndStartGame(){
    //         handleNameChange()
    //         handleSubmit()
    //         changePage()
    //     }
    // }, [])

    const changePage = () => {
        let newPage = '/platform1'
        Navigate(newPage)
    }
    
    // console.log({ name });

    const handleNameChange = (ev) => setPlayer({...player, name: ev.target.value})
    // console.log({name}); //added comment to console log name
    

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

    
    return (
        <div className={styles.homepageDiv}>
            <div className={styles.musicButtonDiv}>
                <MusicButton music={music}/>
            </div>
            <div className={styles.centeredDiv}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h1 className={styles.title}>SUBWAY SAMURAI</h1>
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


