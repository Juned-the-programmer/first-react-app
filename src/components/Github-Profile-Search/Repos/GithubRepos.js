import React, { Component } from 'react';

class GithubRepos extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <p className="h4">
                                        Repository
                                    </p>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        {
                                            this.props.githubRepos.map(Repos => {
                                                return (
                                                    <li className="list-group-item">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <a href={Repos.html_url} target="_blank">{Repos.name}</a>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <a href={Repos.html_url} target="_blank">{Repos.created_at}</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default GithubRepos;