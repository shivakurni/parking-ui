import React, { Component } from 'react';
import axios from 'axios';
import './registration.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert"


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            formData: {
                userName: '',
                mobileNo: '',
                email: '',
                password: '',
                careerStartDate: '',
                joiningDate: ''
            }
        }
    }

    handleChange = (event) => {
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({
            fields
        });


        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };
    

    handleClick = (event) => {
        this.setState({ modal: !this.state.modal });


        event.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["userName"] = "";
            fields["mobileNo"] = "";
            fields["email"] = "";
            fields["password"] = "";
            fields["careerStartDate"] = "";
            fields["joiningDate"] = "";
            this.setState({ fields: fields });
           
        }

        
        const userData = this.state.formData;
        console.log(userData);
        axios.post('http://10.117.189.210:9093/parking/registration', userData)
       
            .then(resp => {
                console.log(resp);
                // alert(resp.data);
                
                toast("Registered Successfully!", {
                    position: toast.POSITION.TOP_CENTER
                   
                });
                setTimeout(
                    function () {
                        this.props.history.push('/');
                    }
                        .bind(this),
                    1500
                );
            }).catch((error)=>{
                // alert(error.resp.data.message);
                console.log(error);
                swal("Enter Correct Details")
                // alert(error.message);

             });
            //  setTimeout(
            //     function () {
                    
            //     }
            //         .bind(this),
            //     1500
            // );
    }


    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["userName"]) {
            formIsValid = false;
            errors["userName"] = "*Please enter your username.";
        }

        if (typeof fields["userName"] !== "undefined") {
            if (!fields["userName"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["userName"] = "*Please enter alphabet characters only.";
            }
        }


        if (!fields["mobileNo"]) {
            formIsValid = false;
            errors["mobileNo"] = "*Please enter your mobile no.";
        }

        if (typeof fields["mobileNo"] !== "undefined") {
            if (!fields["mobileNo"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["mobileNo"] = "*Please enter valid mobile no.";
            }
        }


        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your Email.";
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your Password.";
        }

        
        this.setState({
            errors: errors
        });
        return formIsValid;


    }

    back = () => {
        this.props.history.push(`/`)
    }


    render() {
        return (
            <div className="container">
                <button className="policy-btn" onClick={this.back}>Back</button>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2  account-wall">
                        <form role="form">
                            <h2 className="text-center">Sign Up</h2>
                            <hr className="colorgraph" />

                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <label>Enter your Name:</label>
                                        <input type="text" name="userName" value={this.state.fields.userName} className="form-control input-lg user-name" placeholder="User Name" tabIndex="1" onChange={this.handleChange} />
                                        <div className="userName">{this.state.errors.userName}</div>
                                    </div>
                                </div>

                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                    <label>Enter your Password:</label>
                                        <input type="password" name="password" value={this.state.fields.password} className="form-control input-lg password" placeholder="Password" tabIndex="1" onChange={this.handleChange} />
                                        <div className="password">{this.state.errors.password}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                    <label>Enter your Mobile Number:</label>
                                        <input type="text" name="mobileNo" value={this.state.fields.mobileNumber} className="form-control input-lg mobile-number" placeholder="Mobile Number" tabIndex="1" onChange={this.handleChange} />
                                        <div className="mobileNo">{this.state.errors.mobileNo}</div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                    <label>Enter your Email:</label>
                                        <input type="text" name="email" value={this.state.fields.email} className="form-control input-lg email" placeholder="Email" tabIndex="2" onChange={this.handleChange} />
                                        <div className="errorMsg">{this.state.errors.email}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                    <label>Career Start Date:</label>
                                        <input type="date" className="form-control" placeholder="Career Start Date" name="careerStartDate" required onChange={this.handleChange} />
                                    </div>
                                </div>

                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                    <label>Organization Joining Date:</label>
                                        <input type="date" className="form-control" placeholder="Joining Date" name="joiningDate" required onChange={this.handleChange} />
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleClick}>
                                    Register</button>
                                    <button className="new-user-btn" onClick={this.back}>New User? Register Here</button>

                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

export default Register;
