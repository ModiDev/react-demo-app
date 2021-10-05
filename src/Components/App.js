import React , {useState, useEffect} from 'react';
import './App.css';
import Todo from './To-do';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"; //local storage key
  const [contacts ,setContacts] = useState([]); //use state for contacts array

  const addContactHandler = (contact) =>{ //pass data props to child component to parent
      setContacts([...contacts, contact]) //...contacts means previous contacts
  }
  useEffect(()=>{
    const getContacts =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); //get data from the local storage
    if(getContacts)setContacts(getContacts);
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts)); //set data from the local storage
  },[contacts]);

  return (
    <div className="ui container">
      <Header/>
      <Todo/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contactsList={contacts}/>
    </div>
  );
}

export default App;
