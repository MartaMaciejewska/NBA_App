import Chart from 'react-google-charts';
import React, { Component } from 'react';
import './scss/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import Loader from './loader';
import DataBox from './databox';

export class Slide5 extends Component {
  constructor(props){
    super(props);
    this.state={
      playerID: props.playerID,
      playerName: props.playerName,
      pointsVal: 0,
      threePointersVal: 0,
      freeThrowsVal: 0,
      assistsVal:0,
      blocksVal: 0,
      reboundsVal: 0,
      stealsVal: 0,
      playersPointsVal: props.playersPointsVal,
      playersThreePointersVal: props.playersThreePointersVal,
      playersFreeThrowsVal: props.playersFreeThrowsVal,
      playersAssistsVal:props.playersAssistsVal,
      playersBlocksVal:props.playersBlocksVal,
      playersReboundsVal: props.playersReboundsVal,
      playersStealsVal: props.playersStealsVal,
      show:false,
      dataBox: false,
    }
  }
  componentWillReceiveProps(nextProps) {
           this.setState({
             playerName: nextProps.playerName,
             pointsVal: nextProps.pointsVal,
            threePointersVal: nextProps.threePointersVal,
             freeThrowsVal: nextProps.freeThrowsVal,
             assistsVal: nextProps.assistsVal,
             blocksVal: nextProps.blocksVal,
             reboundsVal: nextProps.reboundsVal,
             stealsVal: nextProps.stealsVal,
             playersPointsVal: nextProps.playersPointsVal,
             playersThreePointersVal: nextProps.playersThreePointersVal,
             playersFreeThrowsVal: nextProps.playersFreeThrowsVal,
             playersAssistsVal: nextProps.playersAssistsVal,
             playersBlocksVal: nextProps.playersBlocksVal,
             playersReboundsVal: nextProps.playersReboundsVal,
             playersStealsVal: 0,
           })
         }
         
  
  show = ()=>{
    this.setState({
      show: true,
    })
    this.dataBoxShow= setTimeout(() => {
          this.setState({
              dataBox: true,
          })
      },4000)
  }

ComponentWillUnmount(){
  clearTimeout(this.dataBoxShow)
}
  render(){
    const chartSize= "100%";
    return(
      <div className="slide5">  
        <h1 className="headline">YOUR RESULTS:</h1>
       {this.state.show === false && <button className="showBtn" onClick={this.show}>SHOW MY RESULTS <FontAwesomeIcon icon={faChartLine}/></button> }
       {this.state.dataBox === true && <DataBox/>}
        {this.state.show===true &&
        <Chart
        width={chartSize}
        height={chartSize}
        chartType="ColumnChart"
        loader={<Loader />}
      data={[
      ['Player', 'You', this.state.playerName],
      ['Points', this.state.pointsVal, this.state.playersPointsVal],
      ['Three Pointers', this.state.threePointersVal, this.state.playersThreePointersVal],
      ['Free Throws', this.state.freeThrowsVal, this.state.playersThreePointersVal],
      ['Assists', this.state.assistsVal, this.state.playersAssistsVal],
      ['Blocks', this.state.blocksVal, this.state.playersBlocksVal],
      ['Steals', this.state.stealsVal, this.state.playersStealsVal],
      ['Rebounds', this.state.reboundsVal, this.state.playersReboundsVal],
    ]}
    options={{
      chartArea: { width: '70%' },
      hAxis: {
        title: 'Stats',
        minValue: 0,
      },
      vAxis: {
        title: 'Player',
      },
      animation: {
        startup: true,
        easing: 'linear',
        duration: 1500,
      },
    }}
        />     
  }
      </div>
    )
  }
}

export default Slide5;