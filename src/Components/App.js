import React from 'react';
import './App.css';
import Todo from './To-do';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const contacts = [
    {
       id:1,
      "name":"Moditha Dassanayake",
      "email":"m.dassa@gmail.com",
      "age":25

    },
    {
       id:2,
      "name":"Sudaraka Gamage",
      "email":"s.gamage@gmail.com",
      "age":27

    },
    {
       id:3,
      "name":"Asanka Rathnayake",
      "email":"a.ratha@gmail.com",
      "age":25

    },   
    {
       id:4,
      "name":"Lisara Jayasiri",
      "email":"l.jayasiri@gmail.com",
      "age":30

    },   
    {
      id:5,
     "name":"Kavintha Oshadha",
     "email":"k.oshadha@gmail.com",
     "age":18

   },   
  ];

  return (
    <div className="ui container">
      <Header/>
      <Todo/>
      <AddContact/>
      <ContactList contactsList={contacts}/>
    </div>
  );
}

export default App;
