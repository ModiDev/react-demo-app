import React , {useState, useEffect} from 'react';
import './App.css';
import Todo from './To-do';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts ,setContacts] = useState([]);

  const addContactHandler = (contact) =>{
      console.log(contact);
      setContacts([...contacts, contact])
  }
  useEffect(()=>{
    const getContacts =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(getContacts)setContacts(getContacts);
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
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
