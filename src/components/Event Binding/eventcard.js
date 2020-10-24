import React, { Component } from 'react';

class EventCard extends Component {
    constructor(props){
        super (props);
        this.state = {
            greet : 'Good Morning'
        }
    }

    wish = () => {
        this.setState({
            greet : 'Good Evening'
        })
    }

    wishme = (message) =>{
        this.setState({
            greet: message
        })
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                            <h2>{this.state.greet}</h2>
                            {/* <button className="btn btn-primary" onClick={this.wish}>Click Me</button> */}
                            <button className="btn btn-primary" onClick={this.wishme.bind(this,'Good Evening')}>Wish Me</button>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default EventCard;