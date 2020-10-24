import React, { Component } from 'react';

class ChildComponentA extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            message: ''
        }
    }

    submitdata = (event) => {
        event.preventDefault();
        this.props.sendData(this.state.message)
        this.setState({ 
            message : ''
        })
    }

    UpdateData = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <p className="h4">Client</p>
                        </div>
                        <div className="card-body">
                            <form action="" onSubmit={this.submitdata}>
                                <div className="form-group">
                                    <input 
                                    onChange={this.UpdateData}
                                    value={this.state.message}
                                    type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Send" className="btn btn-primary btn-sm"/>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <p className="h4">Message From Server is : {this.props.serverMessage}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ChildComponentA;