import React, { Component } from 'react';
import ComponentTwo from './ComponentTwo';

class ComponentOne extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body bg-primary">
                                    <p className="h4">Component One</p>
                                    <ComponentTwo></ComponentTwo>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ComponentOne;