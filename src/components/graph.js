import React from 'react';
import {Bar} from 'react-chartjs-2';

export class graph extends React.Component {
  render() {
    /*I save each key inside the JSON associated*/
    var keys = Object.keys(this.props.grap).slice(1,-1)
    /*Data will contain the income per each month*/
    var incomeData = []

    for (var month in keys){
      /*The income is added to data*/
      incomeData.push(this.props.grap[keys[month]])
      /*The key name is cut to its first 3 letters because will be the label name in the graph*/
      keys[month] = keys[month].slice(0,3) 
    }
    /*The key name is cut to its first 3 letters because will be the label name in the graph*/
    var data = {labels:keys,datasets:[{label:"💵 Income",data:incomeData,backgroundColor:"#388E3C"}]}

    return (
      <div>
        <Bar height={200} data = {data}/>
      </div>
    );
  }
}

export default graph