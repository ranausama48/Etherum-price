import React, { Component } from 'react'
import {connect} from "react-redux"
import Axios from 'axios';
class Status extends Component {
    constructor(props){
        super(props);
        this.state = {
            capital:[],
            // capitalSum:''
        }
        
        
 //GET Request to fetch data from Db

 getCapital = ()=>{
    Axios.get('/showCQ')
    .then(res => {
        this.setState({
            capital: res.data.capital
        })
        console.log(res.data)
    }).then(res => {
       //for capital count
   
    let capitalTotal =  this.state.capital.map(capital => {
       let capitalCnt = +capital.capital
       return (capitalCnt)
   })
       console.log("Capital Array = ",capitalTotal)
       
   this.capitalSum=0;
   for (let index = 0; index < capitalTotal.length; index++) 
   {
       this.capitalSum = this.capitalSum + capitalTotal[index];
   }
       console.log( "Capital Sum = ",this.capitalSum)
       this.setState({capitalSum:this.capitalSum})
   
   
   //for quantity count
   
   let quantityTotal =  this.state.capital.map(capital => {
       let quantityCnt = +capital.quantity
       return (quantityCnt)
   })
       console.log("Quantity Array = ",quantityTotal)
     
   this.quantitySum=0;
   for (let index = 0; index < quantityTotal.length; index++) 
   {
       this.quantitySum = this.quantitySum + quantityTotal[index];
   }
       console.log("Quantity Sum = ",this.quantitySum)
       this.setState({quantitySum:this.quantitySum})
   
       this.forceUpdate()
    })
 }
 getCapital()

        
    }
 
 
  
   
    
  render() {
      console.log(this.state)
      console.log(this.capitalSum)
    return (
         
       <div>
         
            <div class="card text-center align-items-center " >
                
                <div class="card-body col-md-6 " 
                style={{backgroundColor:'black !important'}}>    
                    <div class="input-group mb-3" >
                        <div class="input-group-prepend">
                            <span class="input-group-text" 
                            id="inputGroup-sizing-default">Total Capital</span>
                        </div>
                        <input  type="text" 
                            disabled
                           // value={this.props.sum}
                           value={this.state.capitalSum}
                            className="form-control p-4 text-white border-0"
                            aria-label="Sizing example input" 
                            style={{ background: "#23272B", color: "white" }}
                            aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" 
                            id="inputGroup-sizing-default">Total Quantities</span>
                        </div>
                        <input  
                            type="text" 
                            disabled
                            value={this.state.quantitySum}
                            className="form-control p-4 text-white border-0"
                            aria-label="Sizing example input" 
                            style={{ background: "#23272B", color: "white" }}
                            aria-describedby="inputGroup-sizing-default"/>
                    </div>
                </div>
                
            </div>
        </div>
    )
  }
}

export default Status;
export let getCapital
