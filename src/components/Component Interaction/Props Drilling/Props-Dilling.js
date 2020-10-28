import React, { Component } from 'react';
import ComponentA from './ComponentA'

class PropsDrilling extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            UserInfo : {
                Name : 'Juned',
                Email : 'davdajuned7698@gmail.com',
                Username : 'Junee',
                Age : 20
            }
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="row mt-3 offset-1">
                    <div className="col-md-10">
                        <div className="card">
                        <div className="card-header">
                            <p className="h3">Props Drilling</p>
                        </div>
                        <div className="card-body">
                            <ComponentA UserInfo={this.state.UserInfo}></ComponentA>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default PropsDrilling;