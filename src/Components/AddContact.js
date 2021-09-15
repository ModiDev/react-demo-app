import React from "react";

class AddContact extends React.Component{
    render(){
        return(
            <div className="container ui main">
                <h1>Add Contact</h1>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Enter Your Name"/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Enter Your Email"/>
                    </div>
                    <div className="field">
                        <label>Age</label>
                        <input type="number" name="age" placeholder="Enter Your Age"/>
                    </div>
                    <button className="ui button blue">Add Contact</button>
                </form>
            </div>
        ) 
    }
}
export default AddContact;