import React, { Component } from 'react';
import ChildComponent from './Childcomponent';

class Parentcomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message : 'I am Parent',
            childmessage : ''
        }
    }

    receivedata = (data) => {
        this.setState({
            ...this.state,
            childmessage : data
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <p className="h3">Parent Component</p>
                                </div>
                                <div className="card-body">
                                    <h1>{this.state.childmessage}</h1>
                                    <ChildComponent parentmessage={this.state.message} childata={this.receivedata}></ChildComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Parentcomponent;