import React, { Component } from 'react';
import './scss/App.scss';
import Slide1 from './slide1';
import Slide2 from './slide2';
import Slide3 from './slide3';
import Slide4 from './slide4';
import Slide5 from './slide5';


 export class Slide extends Component {

  constructor(props){
    super(props);
    this.state={
      ids: props.ids,
      names: props.names,
      translateValue: props.translateValue,
      chosenPlayerID: props.ids[props.randomPlayer],
      chosenPlayerName: props.names[props.randomPlayer],
      pointsVal: 0,
      threePointersVal: 0,
      freeThrowsVal: 0,
      assistsVal:0,
      blocksVal: 0,
      reboundsVal: 0,
      stealsVal: 0,
       }
      }
          
    componentDidMount(){
      this.setID(this.props.randomPlayer, true)
    }
    componentWillReceiveProps(nextProps) {
      this.setState({translateValue: nextProps.translateValue})
    }

    setID=(index, firstPlayer = false)=>{
      const ID= this.state.ids[index];
      const name = this.state.names[index];
        fetch(`https://stats.nba.com/stats/playercareerstats/?PerMode=PerGame&PlayerID=${ID}`)
            .then(response => response.json())
            .then(player => {
                let params = {};
                if (firstPlayer) {
                  params = {
                    playersPointsVal: player.resultSets[1].rowSet[0][23],
                    playersThreePointersVal: player.resultSets[1].rowSet[0][9],
                    playersFreeThrowsVal: player.resultSets[1].rowSet[0][12],
                    playersAssistsVal: player.resultSets[1].rowSet[0][18],
                    playersBlocksVal: player.resultSets[1].rowSet[0][20],
                    playersReboundsVal: player.resultSets[1].rowSet[0][16],
                    playersStealsVal: player.resultSets[1].rowSet[0][19],
                  };
                }

               this.setState({
                 chosenPlayerID: ID,
                 chosenPlayerName: name,
                 playersPointsVal: player.resultSets[1].rowSet[0][23],
                 playersThreePointersVal: player.resultSets[1].rowSet[0][9],
                 playersFreeThrowsVal: player.resultSets[1].rowSet[0][12],
                 playersAssistsVal: player.resultSets[1].rowSet[0][18],
                 playersBlocksVal: player.resultSets[1].rowSet[0][20],
                 playersReboundsVal: player.resultSets[1].rowSet[0][16],
                 playersStealsVal: player.resultSets[1].rowSet[0][19],
                ...params
               })

              console.log(this.state.chosenPlayerName)
            })
            .catch(() => {
              console.log("error")
            })
    }

    getPoints =(event) =>{
      this.setState({
        pointsVal: parseInt(event.target.value),
      })
    }
    
    getThrees = (event) =>{
      this.setState({
        threePointersVal: parseInt(event.target.value),
      })
    }
    
    getFree =(event) =>{
      this.setState({
        freeThrowsVal: parseInt(event.target.value),
      })
    }
    
    getAssists = (event) =>{
      this.setState({
        assistsVal: parseInt(event.target.value),
      })
    }
    getBlocks=(event)=>{
      this.setState({
        blocksVal: parseInt(event.target.value),
      })
    }
    getRebs=(event)=>{
      this.setState({
        reboundsVal: parseInt(event.target.value),
      })
    }
    getSteals=(event)=>{
      this.setState({
        stealsVal: parseInt(event.target.value),
      })
    }
  render(){
  
      return <div className="slide" style={{transform: `translateX(${this.state.translateValue}px)`, transition: 'transform ease-out 0.45s'}} >
        <Slide1/>
        <Slide2 setID={this.setID} 
                names={this.state.names} 
                chosenPlayerName={this.state.chosenPlayerName} 
                playerID={this.state.chosenPlayerID}/>
        <Slide3 getPoints={this.getPoints} 
                getFree={this.getFree} getThrees={this.getThrees} 
                getAssists={this.getAssists}
                freeThrowsVal={this.state.freeThrowsVal} 
                pointsVal= {this.state.pointsVal} 
                threePointersVal={this.state.threePointersVal} 
                assistsVal={this.state.assistsVal}
        />
        <Slide4 getBlocks={this.getBlocks} 
                getRebs={this.getRebs} 
                getSteals={this.getSteals}
                blocksVal={this.state.blocksVal} 
                reboundsVal={this.state.reboundsVal} 
                stealsVal={this.state.stealsVal} 
                />
        <Slide5 playerName={this.state.chosenPlayerName} playerID={this.state.chosenPlayerID}
        blocksVal={this.state.blocksVal} reboundsVal={this.state.reboundsVal} stealsVal={this.state.stealsVal}
        freeThrowsVal={this.state.freeThrowsVal} pointsVal= {this.state.pointsVal} threePointersVal={this.state.threePointersVal} 
        assistsVal={this.state.assistsVal} playersPointsVal={this.state.playersPointsVal} playersThreePointersVal={this.state.playersThreePointersVal}
        playersFreeThrowsVal={this.state.playersFreeThrowsVal} playersAssistsVal={this.state.playersAssistsVal} playersBlocksVal={this.state.playersBlocksVal} 
        playersReboundsVal={this.state.playersReboundsVal} playersStealsVal={this.state.playersStealsVal}
        />
        </div>    
  }
 }

export default Slide;