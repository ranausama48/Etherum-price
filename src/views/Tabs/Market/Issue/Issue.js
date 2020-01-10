import React, { Component } from 'react'
import { connect } from "react-redux";
import { stockSend } from '../../../../Redux/Actions/stockAction'
import { sendProfit } from '../../../../Redux/Actions/stockAction'


import Count from '../Status/Status'
class Issue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      quantity: '',
      capital: '',
      alertResult: false,
      profit: ''
    }

    //console.log(this.props.Userrole)

  }
  componentDidMount() {
    this.refs.subIssue.disabled = true
    this.setState({ role: this.props.role })
  }

  changehandler = (e) => {
    var issuepricee = this.refs.issue_price.value;
    var quantity = this.refs.quantity.value;
    if (issuepricee !== "" && quantity !== "") {
      let capital = issuepricee * quantity
      console.log("after multiply capital = ", capital)
      this.setState({
        price: issuepricee,
        quantity: quantity,
        capital: capital

      })
      this.refs.subIssue.disabled = false

    }
    else {
      this.refs.subIssue.disabled = true;
    }


  }

  submitHandler = () => {
    console.log("state = ", this.state)
    var stockData = this.state;
    console.log("stockData to be send to action = ", stockData)
    this.props.stockSend(stockData)
    this.setState({ alertResult: true })
    setInterval(() => {
      this.setState({ alertResult: false })
    }, 3000)
    document.getElementById('Price').value = '';
    document.getElementById('Quantity').value = ''

    this.changehandler()

    //document.getElementById('totalCapital').value='';

  }
  onDisable = (e) => {
    if (e.target.checked) {
      console.log('checked');
      this.refs.issue_price.disabled = true
      this.refs.quantity.disabled = true
      document.getElementById("leftOuter1").style.opacity = '0.4'
      document.getElementById("leftOuter2").style.opacity = '0.4'


    } else {
      console.log('unchecked');
      this.refs.issue_price.disabled = false
      this.refs.quantity.disabled = false
      document.getElementById("leftOuter1").style.opacity = '1'
      document.getElementById("leftOuter2").style.opacity = '1'


    }
  }
  onChangeHandler = (e) => {
    let name = e.target.name
    let val = e.target.value
    this.refs.subIssue.disabled = false

    this.setState({
      profit: val
    })
  }
  sendProfit = () => {
    let profit = this.state.profit
    this.props.sendProfit(this.state.role, profit)
    document.getElementById('profit').value = '';

  }
  render() {
    console.log(this.state)
    console.log(this.props.msg)
    return (

      <div>
        <div >
          {/* Issue Side */}

          <div class="card text-center align-items-center row"
            style={{
              flexDirection: 'row'
            }}>

            <div className="col-md-6" >


              <div class="card-body col-md-12 " style={{ backgroundColor: 'black !important' }}>
                <div class="input-group mb-3" id="leftOuter1" >
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Price</span>
                  </div>
                  <input type="text"
                    id="Price"
                    name="price"
                    onChange={this.changehandler}
                    className="form-control p-4 text-white border-0"
                    aria-label="Sizing example input"
                    ref="issue_price"
                    style={{ background: "#23272B", color: "white" }}
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <div class="input-group mb-3" id="leftOuter2">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Qty</span>
                  </div>
                  <input type="text"
                    id="Quantity"
                    ref="quantity"
                    name="quantity"
                    onChange={this.changehandler}
                    className="form-control p-4 text-white border-0"
                    aria-label="Sizing example input"
                    style={{ background: "#23272B", color: "white" }}
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                {/* <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Total Capital</span>
                        </div>
                        <input  type="text" 
                        disabled
                        value={this.state.capital}
                            id="totalCapital"
                            ref="T_capital"
                            name="t_capital"
                            //onChange={this.changehandler}
                            className="form-control p-4 text-white border-0"
                            aria-label="Sizing example input" 
                            style={{ background: "#23272B", color: "white" }}
                            aria-describedby="inputGroup-sizing-default"/>
                    </div> */}
                <p className="text-success">
                  {
                    this.state.alertResult ? this.state.capital + " Are added to the Total of Capital" : null
                  }
                </p>
              </div>
              {/* <input type="radio" name='changeOpacity' value='disable' onChange={this.onDisable} /> Disable */}

              <div class="card-footer text-muted">
                <button type="submit"
                  onClick={this.submitHandler}
                  ref="subIssue"
                  className="input-grouptext btn btn-dark px-5 border-0"
                  style={{ backgrund: "", color: "white", fontWeight: "600", textAlign: 'right' }}
                >
                  Issue
                        </button>
              </div>
            </div>

            {/* Profit Side */}
            <div className="col-md-6">
              <br />
              <br />
              <div class="card-body col-md-12 " style={{ backgroundColor: 'black !important' }}>
                <div class="input-group mb-3" >
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Profit</span>
                  </div>
                  <input type="text"
                    id="profit"
                    name="profit"
                    onChange={this.onChangeHandler}
                    className="form-control p-4 text-white border-0"
                    aria-label="Sizing example input"
                    ref="issue_profit"

                    style={{ background: "#23272B", color: "white" }}
                    aria-describedby="inputGroup-sizing-default" />
                </div>
                {/* <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Qty</span>
                  </div>
                  <input type="text"
                    id="Quantity"
                    ref="quantity"
                    name="quantity"
                    onChange={this.changehandler}
                    className="form-control p-4 text-white border-0"
                    aria-label="Sizing example input"
                    style={{ background: "#23272B", color: "white" }}
                    aria-describedby="inputGroup-sizing-default" />
                </div> */}

                <p className="text-success">
                  {
                    this.state.alertResult ? this.state.capital + " Are added to the Total of Capital" : null
                  }
                </p>
              </div>
              <br />
              {/* <input type="radio" name='changeOpacity' value="enable" onChange={this.onDisable} /> Enable */}
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch1" onChange={this.onDisable}/>
                <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
              </div>
                <div class="card-footer text-muted"
                  style={{ marginTop: 10 }}>
                  <button type="submit"
                    onClick={this.sendProfit}
                    ref="subIssue"
                    className="input-grouptext btn btn-dark px-5 border-0"
                    style={{ backgrund: "", color: "white", fontWeight: "600", textAlign: 'right' }}
                  >
                    Profit
                </button>
                </div>
              </div>

            </div>
          </div>
        </div>
        )
      }
    }
const mapStatetoprops = state => ({
          //Userrole : state.auth.user.role
          //email : state.auth.user.email
          role: state.auth.user.role,
        msg: state.stockIssue
      
      })
export default connect(mapStatetoprops, {stockSend, sendProfit})(Issue)
