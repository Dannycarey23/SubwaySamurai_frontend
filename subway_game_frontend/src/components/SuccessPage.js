import React, {useEffect, useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Howler } from "howler";

const SuccessPage = ({character, completedRoomOne, completedRoomTwo, destination, music}) => {

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
        <div className="success">
        <h1>Congratulations {character.name}!</h1>
        <h2>You are now travelling to {destination}, hold on tight</h2>
        <button onClick={handleClickEvent}></button>
        </div>

    )
}

export default SuccessPage;