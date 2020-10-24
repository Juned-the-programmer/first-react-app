import React, { Component } from 'react';
import ComponentB from './ComponentB';

class ComponentA extends Component {
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
                                    <p className="h4">Component A</p>
                                    <pre>{JSON.stringify(this.props.UserInfo)}</pre>
                                    <ComponentB UserInfo={this.props.UserInfo}></ComponentB>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ComponentA;