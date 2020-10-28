import React, { Component } from 'react';
import ParentComponentA from './Server';
import ChildComponentA from './Client';

class HomeCA extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            clientMesssage : '',
            serverMessage : '',
        }
    }

    servermessage = (data) => {
        this.setState({
          ...this.state,
          serverMessage : data
        })
      }
    
      clientmessage = (data) => {
        this.setState({
          ...this.state,
          clientMesssage : data
        })
      }

    render() { 
        return ( 
            <React.Fragment>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <ParentComponentA sendData={this.servermessage} clientMesssage={this.state.clientMesssage}></ParentComponentA>
                    </div>
                    <div className="col-md-6">
                        <ChildComponentA serverMessage={this.state.serverMessage} sendData={this.clientmessage}></ChildComponentA>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default HomeCA;