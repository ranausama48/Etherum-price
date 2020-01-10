import React, { Component } from 'react'
import { connect } from "react-redux";

class AddBalance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: '',
            quantity: '',
            capital: '',
            alertResult: false
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
        console.log("state = ", this.props.state._id)
        // var stockData = this.state;
        // console.log("stockData to be send to action = ", stockData)
        // // this.props.stockSend(stockData)
        // this.setState({ alertResult: true })
        // setInterval(() => {
        //     this.setState({ alertResult: false })
        // }, 3000)
        // document.getElementById('Price').value = '';
        // document.getElementById('Quantity').value = ''

        this.changehandler()

        //document.getElementById('totalCapital').value='';

    }
    render() {

        console.log(this.props.state.username)
        return (

            <div>
                <div>

                    <div class="card text-center align-items-center " >
                        <div style={{
                            cursor: 'pointer',
                            height: 50
                        }}
                        title="Return"
                        onClick={this.props.changeTab}>

                            <img src="https://image.flaticon.com/icons/png/512/61/61751.png"
                               
                                className="src"
                                style={{
                                    height: 30, 
                                    position: "absolute",
                                    left: '15px',
                                    top: '10px',
                                }}
                            />
                            <div style={{
                                    height: 30, 
                                    position: "absolute",
                                    left: '100px',
                                    top: '18px',
                                }}
                            >Username: {this.props.state.username}</div>
                        </div>
                        <div class="card-body col-md-6 " style={{ backgroundColor: 'black !important' }}>
                            <div class="input-group mb-3" >
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
                                    aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div class="input-group mb-3">
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
                        <div class="card-footer text-muted">
                            <button type="submit"
                                onClick={this.submitHandler}
                                ref="subIssue"
                                className="input-grouptext btn btn-dark px-5 border-0"
                                style={{ backgrund: "", color: "white", fontWeight: "600", textAlign: 'right' }}
                            >
                                Deposit
                        </button>
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
export default connect(mapStatetoprops, {})(AddBalance)
