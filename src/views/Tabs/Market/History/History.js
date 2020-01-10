import React, { Component } from 'react'
import axios from 'axios'
class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capitalDetail: [],
      total: {} 
    }
    getHistoryData = () => {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }
      // let user = this.props.authdata.user
      let body = JSON.stringify({
        // user
      }) 
      axios.get('/showHistory')
        .then(res => {
          // console.log(res)
          this.setState({
            capitalDetail: res.data.capital,
            total: res.data.total

          })
          console.log(res.data.total)
          // res.json()
        })
        .catch(err => { })
    }
    getHistoryData()
  }
  styling = {
    backgroundColor: "#295a299e"
  }
  render() {
    return (
      <div>
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Capital</th>
              {/* <th scope="col">Amount</th> */}
            </tr>
          </thead>
          <tbody>
            {
              // let count = 0;
              this.state.capitalDetail.map((capitalData, index) => {
                let { price, quantity, capital } = capitalData
                // console.log(capitalData)
                
                return (
                  <tr 
                 style={price == 0 ? { backgroundColor: "#295a299e" } : {backgroundColor: ""}}
                    
                    >
                    <th scope="row" >{index + 1}</th>
                    <td>{price}</td>
                    <td>{quantity}</td>
                    <td>{capital}</td>
                    {/* <td>{checkAmount}</td> */}
                  </tr>
                )
                
              })
            
            }
          </tbody>
          <tfoot>
          <tr>
              <th scope="col">Total</th>
              <th scope="col">{this.state.total.totalPrice}</th>
              <th scope="col">{this.state.total.totalQty}</th>
              <th scope="col">{this.state.total.totalCapital}</th>
              {/* <th scope="col">Amount</th> */}
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}

export default History
export let getHistoryData;