import React, { Component } from 'react';
import ComponentC from './ComponentC';

class ComponentB extends Component {
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
                                    <p className="h4">Component B</p>
                                    <pre>{JSON.stringify(this.props.UserInfo)}</pre>
                                    <ComponentC UserInfo={this.props.UserInfo}></ComponentC>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ComponentB;