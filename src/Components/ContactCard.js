import React from "react";
import user from "../Images/user.png";

const ContactCard = (props) => {

const {name,email,age} = props.contact;

    return(
    <div className="item">
        <img className="ui avatar image" src={user} alt="user"/>
        <div className="content">
            <div key="name" className="header">{name}</div>
            <div key="email">{email}</div>
            <div key="age">{age}</div>
        </div>
        <i className="trash alternate outline icon" style={{color:"red" , marginTop:"7px"}}>
        </i>
    </div>
    );
}

export default ContactCard;