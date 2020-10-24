import React, { Component } from 'react';
import UserContext from './UserContext';

class ComponentThree extends Component {
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
                                <div className="card-body bg-danger">
                                    <p className="h4">Component Three</p>
                                    <UserContext.Consumer>
                                        {
                                            (value) => {
                                                return (
                                                    <pre>{JSON.stringify(value)}</pre>
                                                )
                                            }
                                        }
                                    </UserContext.Consumer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ComponentThree;