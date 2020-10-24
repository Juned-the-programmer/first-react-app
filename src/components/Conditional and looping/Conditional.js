import React, { Component } from 'react';

class Conditional extends Component {
    constructor(props){
        super (props);
        this.state = {
            isloginin : false
        }
    }

    login = (event)  => {
        this.setState({
            isloginin: true
        })
    }

    logout = (event) => { 
        this.setState({
            isloginin : false
        })
    }
    render() { 
        return ( 
            <React.Fragment>
                <pre>{JSON.stringify(this.state.isloginin)}</pre>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-dark text-white text-center">
                                    <p className="h4">Conditional Display</p>
                                </div>  
                                <div className="card-body bg-light m-3">
                                    {
                                        this.state.isloginin ? 
                                        <button onClick={this.logout} className="btn btn-primary btn-sm">LOGOUT</button> 
                                        : <button onClick={this.login} className="btn btn-primary btn-sm">LOGIN</button>
                                    }
                                    {
                                        !this.state.isloginin ? 
                                        <h2>Welcome Guest</h2> : 
                                        <h2>Welcome User</h2>
                                    }        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Conditional;