import React, {useState} from 'react';
import { Howler } from 'howler';

const MusicButton = ({musicIsPlaying, musicToggle}) => {
    // const [musicIsPlaying, setMusicIsPlaying] = useState(true)
    
    const playMusic = ()=>{
        Howler.mute(false)
        // setMusicIsPlaying(true);
        musicToggle()
    }

    const pauseMusic = ()=>{
        Howler.mute(true)
        // setMusicIsPlaying(false);
        musicToggle()
    }

    return ( 
        <>
        {musicIsPlaying ?
        <img src="assets/volume.png" height= "60px" onClick={pauseMusic}/> :
        <img src="assets/volume-mute.png" height= "60px" onClick={playMusic}/>}</>
        );
    }
 
export default MusicButton;