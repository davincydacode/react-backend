import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
super();
this.state={
  user:[]

}


}
/*
componentDidMount(){
  fetch("http://localhost:3001/users")
  .then(res => {res.json()})
  .then(user => { 
      console.log(user); 
      //this.setState({ user })
   });
}
*/
componentDidMount(){

  fetch("/users").then(res=>
    res.json().then(user=>{
      console.log("Data",JSON.stringify(user,null,4));
      this.setState({ user })
    })
  );
}


  
  











  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
    {this.state.user.map(Duser=>
    <div>
    <li key={Duser.id}>{Duser.username}</li>
    </div>
    
    )}


        
        </p>
      </div>
    );
  }
}

export default App;
