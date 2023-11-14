import React from "react";
import {Navigate, useNavigate} from "react-router-dom";
import styles from './FailurePage.module.css'

const FailurePage = ({character, completedRoomOne, completedRoomTwo}) => {
    const Navigate = useNavigate();

    const handleClickEvent = () => {
        if (completedRoomOne == false){
            Navigate('/platform1')
        } else if (completedRoomTwo == false || completedRoomOne == true){
            Navigate('/platform2')
        }
        else {
            Navigate('/platform3')
        }
    }


    return(
        <>
        <h1>Don't give up now {character.name}!</h1>
        <button onClick={handleClickEvent}></button>
        </>
    )
}

export default FailurePage;