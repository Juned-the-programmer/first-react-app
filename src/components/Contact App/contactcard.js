import React, { Component } from 'react';

class ContactCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                {
                    Object.keys(this.props.userdata).length > 0 ? 
                        <React.Fragment>
                            <div className="card sticky-top">
                                <div className="card-header bg-primary text-white">
                                    <div className="p-5">
                                        
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <img src={this.props.userdata.picture.large} alt="" className="img-thumbnail rounded-circle w-50"/>
                                    <ul className="list-group mt-3">
                                        <li className="list-group-item list-group-item-primary">
                                            Name : {this.props.userdata.name.first} {this.props.userdata.name.last}
                                        </li>
                                        <li className="list-group-item list-group-item-primary">
                                            Gender : {this.props.userdata.gender}
                                        </li>
                                        <li className="list-group-item list-group-item-primary">
                                            Email : {this.props.userdata.email}
                                        </li>
                                        <li className="list-group-item list-group-item-primary">
                                            City : {this.props.userdata.location.city}
                                        </li>
                                        <li className="list-group-item list-group-item-primary">
                                            State : {this.props.userdata.location.state}
                                        </li>
                                        <li className="list-group-item list-group-item-primary">
                                            Phone No : {this.props.userdata.phone}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </React.Fragment>
                    :null
                }
            </React.Fragment>
        );
    }
}
 
export default ContactCard;