import React, { Component } from 'react';

class ComponentC extends Component {
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
                                    <p className="h4">Component C</p>
                                    <pre>{JSON.stringify(this.props.UserInfo)}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ComponentC;