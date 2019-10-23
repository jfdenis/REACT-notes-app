import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateUser from './components/CreateUser';
import CreateNotes from './components/CreateNotes';


function App() {
  return (
    <Router>
      <Navigation/>

      <Route path="/" exact component={NotesList}/>
      <Route path="/edit/:id" component={CreateNotes}/>
      <Route path="/create" component={CreateNotes}/>
      <Route path="/user" component={CreateUser}/>
    </Router>
  );
}

export default App;
