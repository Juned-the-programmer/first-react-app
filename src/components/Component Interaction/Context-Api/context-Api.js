import React, { Component } from 'react';
import ComponentOne from './ComponentOne';
import UserContext from './UserContext';

class ContextAPI extends Component {
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
            <div className="row mt-3 offset-1">
          <div className="col-md-10">
            <div className="card">
              <div className="card-header">
                <p className="h3">Context Api</p>
              </div>
              <div className="card-body">
                <UserContext.Provider value={this.state.UserInfo}>
                    <ComponentOne></ComponentOne>
                </UserContext.Provider>
              </div>
            </div>
          </div>
        </div>
        );
    }
}
 
export default ContextAPI;