import React, { Component } from 'react';
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, ModalHeader } from "reactstrap";
import swal from "sweetalert"


class VipHomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                fromDate: '',
                toDate: ''
            }
        }
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    // toggle = () => {
    //     this.setState({ modal: !this.state.modal });
    // };

    handleClick = (event) => {
        event.preventDefault();
        const userData = this.state.formData;
        console.log(userData);
        axios.post('http://10.117.189.210:9093/parking/releaseSlot', userData)
            .then(resp => {
                // toast("Request sent!", {
                //     position: toast.POSITION.BOTTOM_CENTER
                // });
                swal("Slot Released Successfully ")
            });
    }


    

    back = () => {
        this.props.history.push(`/`)
    }


    render() {
        return (
            <div className="container">
                <button className="policy-btn" onClick={this.back}>LogOut</button>
                <div>
                    <h1 align="left" className="user-title" >Welcome:</h1>
                </div>

                <div>
                    <h1 align="left" className="user-title" >Employee Id:</h1>
                </div>

                {/* <div>
                    <h1 align="center" className="slot-title">Please select a Slot</h1>
                </div> */}
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2  account-wall">
                        <form role="form">
                            <h2 className="text-center">Select Date to Release a Slot</h2>
                            <hr className="colorgraph" />


                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <label>From Date:</label>
                                        <input type="date" className="form-control" placeholder="Career Start Date" name="fromDate" required onChange={this.handleChange} />
                                        
                                    </div>
                                </div>

                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <label>To Date:</label>
                                        <input type="date" className="form-control" placeholder="Joining Date" name="toDate" required onChange={this.handleChange} />
                                       
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleClick} data-toggle="modal">
                                Release</button>
                        </form>
                    </div>
                </div>
                {/* <ToastContainer /> */}

            </div>
        );
    }
}

export default VipHomePage;
