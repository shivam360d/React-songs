// import React from 'react';
import { combineReducers } from 'redux';
const songsReducer= ()=>{
    return [{title: 'Still falling For You',duration:'4:21'},
            {title:'Friends', duration: '3:45'},
            {title:'Uptown Funk', duration: '3:45'}];
};

const selectedSongReducer = (selectedSong=null, action) =>{
if(action.type === 'SONG_SELECTED'){
    return action.payload;
}
return selectedSong;
};

export default combineReducers({
    songs:songsReducer,
    selectedSong: selectedSongReducer
});
