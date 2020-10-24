import React, { Component } from 'react';

class ChildComponentI extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            childmessage : ''
        }
    }

    senddata = (event) => {
        this.setState({
            childmessage : event.target.value
        })
        this.props.senddata(event.target.value)
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header text-dark">
                                    <p className="h4">Child Component</p>
                                </div>
                                <div className="card-body text-dark">
                                    <div className="col-md-4">
                                        <form action="">
                                            <div className="form-group">
                                                <input 
                                                onChange={this.senddata}
                                                value={this.state.childmessage}
                                                type="text" className="form-control"/>
                                            </div>
                                        </form>
                                    </div>
                                    <p className="h3 mt-2">I am From Parent : {this.props.parentmessage}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ChildComponentI;