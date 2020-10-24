import React, { Component } from 'react';

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message : 'I am From Child'
        }
    }

    senddata = () => {
        this.props.childata(this.state.message)   
    }   

    render() { 
        return ( 
            <React.Fragment>
                <div className="Card bg-light">
                    <div className="card-header">
                        <p className="h4">Child component </p>
                    </div>
                    <div className="card-body">
                        <h1>{this.props.parentmessage}</h1>
                        <button onClick={this.senddata} className="btn btn-primary btn-sm">Send</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ChildComponent;