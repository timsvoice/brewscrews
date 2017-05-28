import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameChanger from './NameChanger.js';
import * as firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Manos & Tim Bitches"
    }


  }

  handleClick(name){
    this.props.actions.updateBeer(name)
  }

  componentWillMount(){ 
    // firebase.database().ref().child('beers').on("value", (nameSnapshot) => {
    //   const beers = Object.values(nameSnapshot.val())
    //   console.log(beers)
    //   this.setState({beers})      
    // })
  }

  render() {
    const {
      store
    } = this.props
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

          <h1>{this.state.name}</h1>
          <NameChanger handleClick={this.handleClick.bind(this)}/>
          { store.beers ? 
            <div>
            {Object.values(store.beers).map((beer) =>
              <p key={beer}>{beer}</p>
            )}
            </div>
          : null }
        </p>
      </div>
    );
  }
}

export default App;
