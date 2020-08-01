import React, { Component } from 'react';

class Winner extends Component {
    render() { 
        return ( <h3>Winner : {this.props.winnerName}</h3> );
    }
}
 
export default Winner;