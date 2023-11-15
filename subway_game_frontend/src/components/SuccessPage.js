import React, {useEffect, useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Howler } from "howler";
import styles from './Success.module.css'

const SuccessPage = ({character, completedRoomOne, completedRoomTwo, destination, sfx}) => {

    const Navigate = useNavigate();

    const handleClickEvent = () => {
        Howler.stop()
        if (completedRoomTwo == true){
            Navigate('/platform3')
        } else if (completedRoomOne == true){
            Navigate('/platform2')
        }
        else {
            Navigate('/platform1')
        }
    }

    useEffect(()=>{sfx.play()}, [])

    return(
        <div className={styles.successPageDiv}>
            <div className={styles.headerSuccess}>
            <h1 className={styles.successH1}>Congratulations {character.name}!</h1>
            <h2 className={styles.successH2}>You are now travelling to {destination}, hold on tight</h2>
            <button className={styles.continueButton} onClick={handleClickEvent}>Continue?</button>
            </div>
            </div>
    )
}

export default SuccessPage;