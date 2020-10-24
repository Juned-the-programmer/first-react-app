import React, { Component } from 'react';

class GithubProfileInfo extends Component {
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
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Name : <span className="font weight-bold">{this.props.githubProfile.name}</span>
                                </li>
                                <li className="list-group-item">
                                    UserName : {this.props.githubProfile.login}
                                </li>
                                <li className="list-group-item">
                                    Follwers : {this.props.githubProfile.followers} 
                                </li>
                                <li className="list-group-item">
                                    Following : {this.props.githubProfile.following}
                                </li>
                                <li className="list-group-item">
                                    Location : {this.props.githubProfile.location}
                                </li>
                                <li className="list-group-item">
                                    Joined From : {this.props.githubProfile.created_at}
                                </li>
                                <li className="list-group-item">
                                    Bio : {this.props.githubProfile.bio}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default GithubProfileInfo;