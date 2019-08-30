import React, { Component } from 'react';
import './userHomePage.css'
import axios from 'axios';
import swal from "sweetalert"



class UserHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: localStorage.getItem("userName"),
            listAvailableSeats: []
        }
    }

    //fetch data on page load
    componentDidMount() {
        axios.get("http://10.117.189.210:9093/parking/slots").then((response) => {
            console.log(response.data)
            this.setState({ listAvailableSeats: response.data })
        }).catch((error) => {
        });
    }

    //redirect to login page
    back = () => {
        this.props.history.push(`/`);
    }

    // handleSlotBooking=(e)=>{
    //     e.preventDefault();
    //     let data1={
    //         regId:localStorage.getItem("regId"),
    //         availableSlotId:localStorage.getItem("availableSlotId")
    //     }
    //         axios.post(`http://10.117.189.210:9093/parking/releaseSlot`,data1).then((response)=>{
    //         console.log(response.data);
    //         swal(response.data.message);
    //     }).catch((error)=>{
    //         console.log(error);        
    //     });
    // }

    slotClicked = (item) => {
        
        localStorage.setItem("parkingId", item.parkingId);
        console.log(item.parkingId);
        localStorage.setItem("parkingSlot", item.parkingSlot);
        console.log(item.parkingSlot);
        const userData = this.state.formData;

        
        

        // var Name = document.getElementsByName(item.name);
        // var checked = document.getElementById(item.parkingId);
    
        // if (checked.checked) {
        //     alert("sdfsdf")
        //   for(var i=0; i < Name.length; i++){
    
        //       if(!Name[i].checked){
        //           Name[i].disabled = true;
        //       }else{
        //           Name[i].disabled = false;
        //       }
        //   } 
        // }
        // else {
        //   for(var i=0; i < Name.length; i++){
        //     Name[i].disabled = false;
        //   } 
        // }    

        // axios.post('http://10.117.189.210:9093/parking/releaseSlot', userData)
        //     .then(resp => {
        //         // toast("Request sent!", {
        //         //     position: toast.POSITION.BOTTOM_CENTER
        //         // });
        //         swal("Slot Released Successfully ")
        //     }).catch((error)=>{
        //         console.log(error);
        //         swal("Parking does not exist ")
        //     });
    }


    book = (e) => {
        e.preventDefault();
        let data1={
            parkingId:localStorage.getItem("parkingId"),
            userId:localStorage.getItem("userId")            
        }
            axios.post(`http://10.117.189.210:9093/parking/booking`,data1).then((response)=>{
            console.log(response.data);
            swal(response.data.message);
        }).catch((error)=>{
            console.log(error);        
        });

    }



    render() {
        return (
            <div class="container">
                <button className="policy-btn" onClick={this.back}>LogOut</button>
                <div>
                    <div>
                        <h1 align="left" className="user-title" >Welcome:   {this.state.userName}</h1>
                    </div>
                    <div>
                        <h1 align="center" className="slot-title">Please select a Slot</h1>
                    </div>

                    {this.state.listAvailableSeats.map((item, i) => {
                        return (
                            <div className="slot-container">
                                <div class="cabin fuselage" key={i}>
                                    <div class="row--1">
                                        <div class="seats" type="A">
                                            <div class="seat">
                                                <input type="checkbox" name="progress" id={item.parkingId} onClick={() => this.slotClicked(item)} />
                                                <label for={item.parkingId}>{item.parkingSlot}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })}

                    <div>
                        <button type="button" className="btn btn-info book-btn bttn" onClick={this.book}>Book</button>
                    </div>
                </div>

            </div>
        )
    }
}
export default UserHomePage;