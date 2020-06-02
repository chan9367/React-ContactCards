import React, { Component }  from 'react';
import logo from './logo.svg';
import ContactCard from "./ContactCard";
import './App.css';

class App extends Component{
  render(){
    
    return (
      <>
      
      <ContactCard 
        name="John"
        mobile="1230984567"
        work="9942463812"
        email="john@email.com"
      />
      <ContactCard 
        name="Jon"
        mobile="9803416521"
        work="9942463812"
        email="jon@email.com"
      />
      <ContactCard 
        name="Jawn"
        mobile="6781234356"
        work="9942463812"
        email="jawn@email.com"
      />
      
      </>
    )
  }
}
export default App;
