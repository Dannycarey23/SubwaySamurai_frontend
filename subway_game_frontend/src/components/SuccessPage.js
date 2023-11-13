import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Howler } from "howler";

const SuccessPage = ({character, completedRoomOne, completedRoomTwo, pauseFightMusic}) => {

    const Navigate = useNavigate();

    const handleClickEvent = () => {

        Howler.stop()
        if (completedRoomOne == true){

            Navigate('/platform2')
        } else if (completedRoomTwo == true){

            Navigate('/platform3')
        }
        else {

            Navigate('/platform1')
        }

    }

    return(
        <>
        <h1>Congratulations {character.name}!</h1>
        <button onClick={handleClickEvent}>Continue</button>
        </>

    )
}

export default SuccessPage;