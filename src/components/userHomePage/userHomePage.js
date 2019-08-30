import React, { Component } from 'react';
import './userHomePage.css'
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { withTranslation } from 'react-i18next';


class UserHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listAvailableSeats: []
        }
    }

    componentDidMount() {
        axios.get("mock.json").then((response) => {
            this.setState({ listAvailableSeats: response.data })           
            localStorage.setItem("parkingId", response.data.parkingId);
            localStorage.setItem("parkingSlot", response.data.parkingSlot);
        }).catch((error) => {           
        });
    }

    back = () => {
        this.props.history.push(`/`)
    }

    render() {
        return (
            <div class="container">
                <button className="policy-btn" onClick={this.back}>LogOut</button>
                <div>
                    <div>
                        <h1 align="left" className="user-title" >Welcome:</h1>
                    </div>

                    <div>
                        <h1 align="left" className="user-title" >Employee Id:</h1>
                    </div>

                    <div>
                        <h1 align="center" className="slot-title">Please select a Slot</h1>
                    </div>
                   
                    <ol class="cabin fuselage">
                        <li class="row--1">
                            <ol class="seats" type="A">
                                <li class="seat">
                                    <input type="checkbox" id="1A" />
                                    <label for="1A">1A</label>
                                </li>
                                <li class="seat">
                                    <input type="checkbox" id="1B" />
                                    <label for="1B">1B</label>
                                </li>
                                <li class="seat">
                                    <input type="checkbox" id="1C" />
                                    <label for="1C">1C</label>
                                </li>
                                <li class="seat">
                                    <input type="checkbox" disabled id="1D" />
                                    <label for="1D">Occupied</label>
                                </li>
                                <li class="seat">
                                    <input type="checkbox" id="1E" />
                                    <label for="1E">1E</label>
                                </li>
                            </ol>
                        </li>

                        <li class="row--2">
                            <ol class="seats" type="A">
                                <li class="seat">
                                    <input type="checkbox" id="2A" />
                                    <label for="2A">2A</label>
                                </li>
                                <li class="seat">
                                    <input type="checkbox" id="2B" />
                                    <label for="2B">2B</label>
                                </li>
                                <li class="seat">
                                    <input type="checkbox" id="2C" />
                                    <label for="2C">2C</label>
                                </li>
                                <li class="seat">
                                    <input type="checkbox" id="2D" />
                                    <label for="2D">2D</label>
                                </li>
                                <li class="seat">
                                    <input type="checkbox" id="2E" />
                                    <label for="2E">2E</label>
                                </li>
                            </ol>
                        </li>


                        <li class="row--3">
                            <ol class="seats" type="A">
                                <li class="seat">
                                    <input type="checkbox" id="3A" />
                                    <label for="3A">3A</label>
                                </li>
                                <li class="seat">
                                    <input type="checkbox" id="3B" />
                                    <label for="3B">3B</label>
                                </li>
                                <li class="seat">
                                    <input type="checkbox" id="3C" />
                                    <label for="3C">3C</label>
                                </li>
                                <li class="seat">
                                    <input type="checkbox" disabled id="3D" />
                                    <label for="3D">Occupied</label>
                                </li>
                                <li class="seat">
                                    <input type="checkbox" id="3E" />
                                    <label for="3E">3E</label>
                                </li>
                            </ol>
                        </li>
                        <li class="row--4">
                            <ol class="seats" type="A">
                                <li class="seat">
                                    <input type="checkbox" id="4A" />
                                    <label for="4A">4A</label>
                                </li>
                                <li class="seat">
                                    <input type="checkbox" id="4B" />
                                    <label for="4B">4B</label>
                                </li>
                                <li class="seat">
                                    <input type="checkbox" id="4C" />
                                    <label for="4C">4C</label>
                                </li>
                                <li class="seat">
                                    <input type="checkbox" id="4D" />
                                    <label for="4D">4D</label>
                                </li>
                                <li class="seat">
                                    <input type="checkbox" id="4E" />
                                    <label for="4E">4E</label>
                                </li>
                            </ol>
                        </li>

                    </ol>
                    <div>
                        <button type="button" className="btn btn-info book-btn" onClick={this.book}>Book</button>

                    </div>
                </div>
            </div>
        )
    }
}
export default UserHomePage;