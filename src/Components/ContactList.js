import React from "react";

const ContactList = (props) =>{
    const renderContactList = props.contactsList.map((contact)=>{
        return(
            <div className="item">
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                    <div>{contact.age}</div>
                </div>
                <i className="trash alternate outline icon"></i>
            </div>
        );
    });
    return(
    <div className="container ui celled list">{renderContactList}</div>
    ); 
}
export default ContactList;