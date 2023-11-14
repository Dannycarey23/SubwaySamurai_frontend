import React, {useState} from 'react';

const MusicButton = ({music}) => {
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
        <img src="assets/volume-mute.png" height= "60px" onClick={pauseMusic}/> :
        <img src="assets/volume.png" height= "60px" onClick={playMusic}/>}</>
        );
    }
 
export default MusicButton;