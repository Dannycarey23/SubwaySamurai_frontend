import React, {useState} from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const HomePage = ({character, updatePlayer}) => {

    const [player, setPlayer] = useState(character)

    const Navigate = useNavigate()

    

    const changePage = () => {
        let newPage = '/platform1'
        Navigate(newPage)
    }
    
    // console.log({ name });

    const handleNameChange = (ev) => setPlayer({...player, name: ev.target.value})
    // console.log({name}); //added comment to console log name
    

    const handleSubmit = ev => {
        ev.preventDefault();
        console.log("Handle Submit has actually been called");
        updatePlayer({
            id: player.id,
            name: player.name,
            health: player.health,
            attackPoints: player.attackPoints
        })
    }

    
    return (
        <div>
        <form onSubmit={handleSubmit}>
        <h2>Set Player Name</h2>
        <label htmlFor='name'>Player Name</label>
        <input 
        type='text'
        id='name'
        defaultValue={player.name}
        required
        onChange={handleNameChange}
        />
        <button type="submit" name="submit" value="Update" onClick={handleSubmit}/>
        </form>

        <button onClick={changePage}>Start Game</button>
        </div> 
     );
}
 
export default HomePage;