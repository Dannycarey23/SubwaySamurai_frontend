import React from "react";
import {Navigate, useNavigate} from "react-router-dom";

const FailurePage = ({character}) => {
    const Navigate = useNavigate();

    return(
        <>
        <h1>Don't give up now {character.name}!</h1>
        </>
    )
}

export default FailurePage;