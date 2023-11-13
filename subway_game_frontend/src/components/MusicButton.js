import React, {useState} from 'react';
import { Howl } from 'howler';

const MusicButton = ({music, soundOn, soundOff}) => {
    const [musicIsPlaying, setMusicIsPlaying] = useState(false)
    
    const playMusic = ()=>{
            music.play()
            setMusicIsPlaying(true);
    }

    const pauseMusic = ()=>{
        music.pause()
        setMusicIsPlaying(false);
    }

    return ( 
        <>
        {musicIsPlaying ?
        <img src="assets/volume-mute.png" height= "50px" onClick={pauseMusic}/> :
        <img src="assets/volume.png" height= "50px" onClick={playMusic}/>}</>
        );
    }
 
export default MusicButton;