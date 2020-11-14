import React from 'react'
import './Profile.css'
import {Image, EnvelopeFill} from 'react-bootstrap'

import profpic from '../assets/profile-pic-icon-square.png'

export default class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <div className="header-box">
                    <div className= "profile-pic">
                        <Image src={profpic} roundedCircle/>
                    </div>
                    <div className = "Name-box">
                        <h1>Connor "Sexy" Boham</h1>
                        <h5><i>EnvelopeFill</i>CBoHAM@stud.net</h5>
                    </div>
                </div>
                <div className= "body-box">
                    <div className = "sub-box">
                        <div className= "sponosorships">
                            <h3>My Sponosorships</h3>
                        </div>
                    </div>
                    <div className = "sub-box">
                        <div className= "requests">
                            <h3>My Requests</h3>
                        </div>
                    </div>
                    <div className = "sub-box">
                        <div className= "account-info">
                            <h3>My Info</h3>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}