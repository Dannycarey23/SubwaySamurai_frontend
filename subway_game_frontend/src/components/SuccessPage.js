import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SuccessPage = ({character, completedRoomOne}) => {

    const Navigate = useNavigate();

    const handleClickEvent = () => {
        if (completedRoomOne == true){
            Navigate('/platform2')
        } else {
            Navigate('/platform1')
        }
    }

    return(
        <>
        <h1>Congratulations {character.name}!</h1>
        <button onClick={handleClickEvent}></button>
        </>

    )
}

export default SuccessPage;