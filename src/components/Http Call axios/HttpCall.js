import React, { Component } from 'react';
import axios from "axios";

class HttpCall extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            UserData : []
        }
    }

    componentDidMount() {
        let DataURL = 'https://jsonplaceholder.typicode.com/users'
        axios.get(DataURL).then((response) => {
            this.setState({ 
                UserData : response.data
            })
        }).catch( (error) => {

        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                          
                                
                                    <table className="table table-hover text-center table-striped table-primary">
                                        <thead>
                                            <th>
                                                <td>ID</td>
                                                <td>Name</td>
                                                <td>Email</td>
                                                <td>UserName</td>
                                                <td>Address</td>
                                                <td>Phone NO</td>
                                            </th>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.UserData.map(user => {
                                                    return (
                                                        <tr key={user.id}>
                                                            <td>{user.id}</td>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.username}</td>
                                                            <td>{user.address.city}</td>
                                                            <td>{user.phone}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default HttpCall;