import React, { Component } from 'react';
import axios from 'axios';

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            UserData : [],
            ErrorMessage : ''
        }
    }

    componentDidMount() {
        let DataURL = 'https://gist.githubusercontent.com/Juned-the-programmer/aacea0c40ea12d3e28eb920099ecda4e/raw/5acba8ab646525b8f826b4429c6a7a18657004ac/user.json'
        axios.get(DataURL).then((response) => {
            this.setState({
                ...this.state,
                UserData : response.data
            })  
        }).catch((error) => {
            this.setState({
                ...this.state,
                ErrorMessage : error
            })
        })
    }

    senddata = (user) => {
        this.props.senddata(user)
    }
    render() { 
        return ( 
            <React.Fragment>
                <table className="table table-striped table-hover table-responsive">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Phone No</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                this.state.UserData.map(user => {
                                    return(
                                        <tr key={user.login.uuid} onClick={this.senddata.bind(this, user)}>
                                            <td>{user.login.uuid.substr(user.login.uuid.length - 4)}</td>
                                            <td>{user.name.first} {user.name.last}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.email}</td>
                                            <td>{user.location.city}</td>
                                            <td>{user.location.state}</td>
                                            <td>{user.phone}</td>
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default ContactList;