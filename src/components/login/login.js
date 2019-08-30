import React, { Component } from 'react';
import axios from 'axios';
import './login.css';
import { ToastContainer, toast } from 'react-toastify';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            formData: {
                email: '',
                password: ''
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


    validateHandler = (event) => {
        event.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["email"] = "";
            fields["password"] = "";
            
            this.setState({ fields: fields });
            // alert("Form submitted");
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["email"] = "";
            fields["password"] = "";            
            this.setState({ fields: fields });
            // alert("Form submitted");
        }

        const { formData } = this.state;
        axios.post('http://10.117.189.210:9093/parking/login', formData).then((response) => {
            console.log(response);
            localStorage.setItem("roleId", response.data.roleId);
            localStorage.setItem("roleType", response.data.roleType);

            localStorage.setItem("userName", response.data.userName);
            localStorage.setItem("userId", response.data.userId);
            if (response.data.roleType == 'employee') {
                toast("Logged in!", {
                    position: toast.POSITION.TOP_CENTER
                });
                setTimeout(
                    function () {
                        this.props.history.push('/userHomePage');
                    }
                        .bind(this),
                    1500
                );
            }

            if (response.data.roleType === 'vip' ) {
                toast("Logged in!", {
                    position: toast.POSITION.TOP_CENTER
                });
                setTimeout(
                    function () {
                        this.props.history.push('/vipHomePage');
                    }
                        .bind(this),
                    1500
                );
            }
        });

        
    }


    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;


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
        this.props.history.push(`/registration`)
    }

    render() {
        return (
            <div className="container">
                
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-sm-6 col-md-4 col-md-offset-4">
                        <h1 className="text-center login-title">Please Login</h1>
                        <div className="account-wall">
                            <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                                alt="" />
                            <form className="form-signin">
                                <input type="text" name="email" value={this.state.fields.email} className="form-control userName" placeholder="Email" onChange={this.handleChange} required autoFocus /><div className="errorMsg">{this.state.errors.email}</div>
                                <input type="password" name="password" value={this.state.fields.password} className="form-control password" onChange={this.handleChange} placeholder="Password" required /><div className="errorMsg">{this.state.errors.password}</div>
                                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit}>
                                    Sign in</button>
                                    <button className="new-user-btn" onClick={this.back}>New User? Register Here</button>
                            </form>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

export default Login;
