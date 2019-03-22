import React from 'react';
import SongList from './SongList'
import SongDetail from './SongDetail';
const App = () =>{
    return (
        //to prevent the list to span over the width
        //implementing grid systems
        <div className="ui container row">
        <div className="ui row">
        <div className="column eight wide">
        <SongList/>
        </div>
        <div className="column eight wide"><SongDetail/></div>
        </div>
        </div>
    );
};

export default App;