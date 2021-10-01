import React from "react";

class AddContact extends React.Component{
    state = {
        name:"",
        email:"",
        age:"",
    }
    add = (e) =>{
        e.preventDefault(); // dont get page refresh when click in the add button

        if(this.state.name === "" || this.state.email === "" || this.state.age === ""){
            alert("All the feilds are manadatory !");
            return
        }
        this.props.addContactHandler(this.state); // pass the added values as props to app.js using eventhandler[child to parent]
        this.setState({name:"", email:"",age:""});// empty the feilds after click the add
        
    }
    render(){
        return(
            <div className="container ui main">
                <h1>Add Contact</h1>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" key="name"
                        name="name" 
                        placeholder="Enter Your Name" 
                        value ={this.state.name}
                        onChange={(e)=> this.setState({name:e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" key="email"
                        name="email" 
                        value = {this.state.email}
                        onChange= {(e) => this.setState({email:e.target.value})}
                        placeholder="Enter Your Email"/>
                    </div>
                    <div className="field">
                        <label>Age</label>
                        <input type="number" key="age"
                        name="age" 
                        value= {this.state.age}
                        onChange = {(e)=> this.setState({age:e.target.value})}
                        placeholder="Enter Your Age"/>
                    </div>
                    <button className="ui button blue">Add Contact</button>
                </form>
            </div>
        ) 
    }
}
export default AddContact;