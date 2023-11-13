import React, {useState} from 'react';
import { Howl } from 'howler';

const MusicButton = ({music, soundOn, soundOff}) => {
    const [musicIsPlaying, setMusicIsPlaying] = useState(false)
    
    const playMusic = ()=>{
        // if (!music.playing()){
            music.play()
            setMusicIsPlaying(true);
        // }else{return}
    }

    const pauseMusic = ()=>{
        // if(music.playing()){
        music.pause()
        setMusicIsPlaying(false);
    // }
    }

    return ( 
        <>
        {musicIsPlaying ?
        <img src="assets/volume-mute.png" height= "50px" onClick={pauseMusic}/> :
        <img src="assets/volume.png" height= "50px" onClick={playMusic}/>}</>
        );
    }
 
export default MusicButton;