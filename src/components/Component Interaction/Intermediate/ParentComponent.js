import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponentI extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            pmessage : '',
            cmessage : ''
        }
    }

    UpdateInput = (event) => {
        this.setState({
            ...this.state,
            pmessage : event.target.value
        })
    }

    childmessage = (data) => {
        this.setState({ 
            ...this.state,
            cmessage : data
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <p className="h4">Parent Component</p>
                                </div>
                                <div className="card-body bg-dark text-white">
                                    <div className="col-md-4">
                                        <form action="">
                                            <div className="from-group">
                                                <input 
                                                value={this.state.pmessage}
                                                onChange={this.UpdateInput}
                                                type="text" className="form-control"/>
                                            </div>
                                        </form>
                                    </div>
                                    <p className="h3 mt-2">I am From Child : {this.state.cmessage} </p>
                                    <ChildComponent parentmessage={this.state.pmessage} senddata={this.childmessage}></ChildComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ParentComponentI;