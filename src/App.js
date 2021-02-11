import React, { Component } from 'react'
import imgSrc from './Photo.jpg';
import './App.css';
export default class App extends Component {
  state = {
    Person: {
      fullName: 'Abderrahman Dhahak',
      imgSrc:'',
     bio:'Bachelor Electronics',
       profession:'Developper'
      },
     
     btn:false,
     interval: 0,
     count:0,
     };
 
     componentDidMount = () =>
     {
       this.interval = setInterval(() => {
         this.setState((prevState) => ({
           count: prevState.count + 1,
         }));
       }, 1000);
     }
 
     handle = () =>
     {
      this.setState({btn:true})
     }
  render() {
    return (
      <div className="App">
        {this.state.btn?(<div><p>{this.state.Person.fullName}</p>
        <p>{this.state.Person.bio}</p>
        <img className="imgsize" src ={imgSrc} alt = 'Photo' />
        
        <p>{this.state.Person.profession}</p></div>)
  :null}
      <button onClick={this.handle}>Show Profile</button>
      <p>{this.state.count}</p>
    </div>
  );
    
  }
}

