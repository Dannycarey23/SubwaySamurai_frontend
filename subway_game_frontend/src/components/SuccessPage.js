import React, {useEffect, useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SuccessPage = ({character, completedRoomOne, completedRoomTwo, destination}) => {

    const Navigate = useNavigate();

    const handleClickEvent = () => {
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