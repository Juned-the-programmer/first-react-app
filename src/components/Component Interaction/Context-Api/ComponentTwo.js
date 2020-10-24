import React, { Component } from 'react';
import ComponentThree from './ComponentThree'

class ComponentTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body bg-warning">
                                    <p className="h4">Component Two</p>
                                    <ComponentThree></ComponentThree>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ComponentTwo;