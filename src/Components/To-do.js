import React from "react";


class Todo extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            text:'',
            item:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({text: e.target.value})
    }
    handleSubmit(e) {
        e.preventDefault()
        if(this.state.text.length === 0) return

        const newItem = {
            text: this.state.text,
            id: Date.now()
        }
        this.setState(state =>({
            item:state.item.concat(newItem),
            text:''
        }))

    }
    render(){
       return(
            <div>
                <h1>TODO Application</h1>
                <ul>
                {this.state.item.map(items =>(
                    <li key={items.id}>{items.text}</li>
                ))}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <label className="name" htmlFor="id">Input Todo Name</label>
                    <input className="input" id="id" onChange ={this.handleChange} value={this.state.text}></input>
                    <button className="button">Add</button>
                </form>
            </div>
       );
    }
}
export default Todo