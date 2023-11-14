import React, {useEffect} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {Howler, Howl} from "howler";
import styles from './FailurePage.module.css'

const FailurePage = ({character, completedRoomOne, completedRoomTwo, sfx}) => {
    const Navigate = useNavigate();

    const handleClickEvent = () => {
        Howler.stop()
        if (completedRoomOne == false){
            Navigate('/platform1')
        } else if (completedRoomTwo == false || completedRoomOne == true){
            Navigate('/platform2')
        }
        else {
            Navigate('/platform3')
        }
    }

    useEffect(()=>{sfx.play()}, [])


    return(
        <div className={styles.failurePageDiv}>
            <div className={styles.headerFailure}>
                <h1 className={styles.failure}>Don't give up now {character.name}!</h1>
                <button className={styles.continueButton} onClick={handleClickEvent}>Continue The Battle!</button>
            </div>
        </div>
    )
}

export default FailurePage;