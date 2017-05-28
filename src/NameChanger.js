import React, { Component } from 'react';

class NameChanger extends Component {
 render(){
   return(
     <button onClick={() => this.props.handleClick("amstel")}>Button Bitches</button>
   ) 
 }
}

export default NameChanger;