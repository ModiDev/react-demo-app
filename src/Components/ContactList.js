import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) =>{
    const renderContactList = props.contactsList.map((contact)=>{
        return(
         <ContactCard contact={contact} />
        );
    });
    return(
    <div className="container ui celled list">{renderContactList}</div>
    ); 
}
export default ContactList;