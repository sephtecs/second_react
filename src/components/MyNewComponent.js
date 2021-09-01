import React, { Component } from 'react';

class PersonCard extends Component{
    render(){
        return(
            <div>
                {this.props.someText}
            </div>
        );
    }
}

export default PersonCard;