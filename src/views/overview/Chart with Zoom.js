import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ChartWithZoom extends Component {
  	constructor() {
		super();
		this.generateDataPoints = this.generateDataPoints.bind(this);
		this.state={
			value:0
		}
	}
	componentDidMount(){
		var value=this.generateDataPoints(this.props.id)
		this.setState({
			value:value
		})
	}
	componentDidUpdate(prevprops){
		if(prevprops.id !== this.props.id)
		{
			var value=this.generateDataPoints(this.props.id)
			this.setState({
				value:value
			})
		}
		
	}
	// setInterval(this.generateDataPoints, 1000);
	generateDataPoints(noOfDps) {
		var xVal = 1, yVal = 100;
		var dps = [];
		for(var i = 0; i < noOfDps; i++) {
			yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
		
			dps.push({x: xVal,y: yVal});	
			xVal++;
		}
		return dps;
	}
	
	render() {
		const options = {
			theme: "dark2", //"light2", // "light1", "dark1", "dark2"
			animationEnabled: true,
			zoomEnabled: true,
			title: {
				text: ""
			},
			axisY: {
				includeZero: false,
				gridColor: '#ccc'
			},
			data: [{
				type: "area",
				dataPoints:this.state.value ,
				color: '#CC3300',
			}]
		}
		return (
		  <div className="ChartWithZoom ">

				<CanvasJSChart options = {options}
				style = {{color:'black'}} 
				/* onRef={ref => this.chart = ref} */
				/>
				
		  </div>
		);
	}
}
export default ChartWithZoom;
