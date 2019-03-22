import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
 
class SongList extends Component {

renderList = ()=>{
    return this.props.songs.map(song=>{
        return (
            //general ui 
            <div className="item" key={song.title}>
              <div className="right floated content">
              <button className="ui button primary" onClick={()=>this.props.selectSong(song)}>Select</button>
              </div>
              <div className="content">{song.title}</div>
            </div>
        );
    });
}

render(){
    
    //class to display line divider
    return <div className ="ui divided list">{this.renderList()}</div>;
};
}

//working as configuration of data coming from store
const mapStateToProps = state =>{
    //this object will be passed as props in the connected component.
    return { songs : state.songs};
}
//referencing selectSong action and mapStateToProps to the connect component
//returned objects from mapStateToProps and selectSong are passed as props to the SongList component
export default connect(mapStateToProps,{selectSong})(SongList);
//what is happening behind the scenes?
//why don't we pass the selectSong function directly into the code?
//ANS: Connect plays a special role in this. It takes the action function, it automatically calls the dispatch function when 
//selectSong gets called. This causes the whole redux cycle to run.