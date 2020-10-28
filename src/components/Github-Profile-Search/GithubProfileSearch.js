import React, { Component } from 'react';
import axios from 'axios';
import client_id  from './Githubcredential';
import client_secret from './Githubcredential';
import GithubProfileInfo from './Profile/GithubProfileInfo';
import GithubProfileCard from './Profile/GithubProfileCard';
import GithubRepos from './Repos/GithubRepos';

class GithubProfileSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            githubUsername : '',
            githubProfile : {},
            githubRepos : [],
            errorMessage : ''
        }
    }

    submitdata = (event) => {
        event.preventDefault();
        this.getprofileinfo()
        this.getreposinfo()
    }

    UpdateInput = (event) => {
        this.setState({
            ...this.state,
            githubUsername : event.target.value
        })
    }

    getprofileinfo = () => {
        let DataURL = `https://api.github.com/users/${this.state.githubUsername}?${client_id}&${client_secret}`
        axios.get(DataURL).then((response) => {
            this.setState({
                ...this.state,
                githubProfile : response.data
            })
        }).catch((error) => {
            this.setState({
                ...this.state,
                errorMessage : error.message
            })
        })
    }

    getreposinfo = () => {
        let DataURL = `https://api.github.com/users/${this.state.githubUsername}/repos?${client_id}&${client_secret}`
        axios.get(DataURL).then((response) => {
            this.setState({
                ...this.state,
                githubRepos : response.data
            })
        }).catch((error) => {
            this.setState({
                ...this.state,
                errorMessage : error.message
            })
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-warning">
                                    <p className="h4">Github Profile Searcher</p>
                                </div>
                                <div className="card-body">
                                    <form className="form-row" onSubmit={this.submitdata}>
                                        <div className="form-group col-md-6">
                                            <input 
                                            value={this.state.githubUsername}
                                            onChange={this.UpdateInput}
                                            type="text" className="form-control" placeholder="Github Profile"/>
                                        </div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className="form-group">
                                            <input type="submit" value="Search" className="btn btn-primary btn-sm"/>
                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="col-md-3">
                                            {
                                                Object.keys(this.state.githubProfile).length > 0 ? 
                                                <React.Fragment>
                                                    <GithubProfileCard githubProfile={this.state.githubProfile}></GithubProfileCard>
                                                </React.Fragment>
                                                :null
                                            }
                                        </div>
                                        <div className="col-md-9">
                                            {
                                                Object.keys(this.state.githubProfile).length > 0 ? 
                                                <React.Fragment>
                                                    <GithubProfileInfo githubProfile={this.state.githubProfile}></GithubProfileInfo>
                                                </React.Fragment>
                                                :null
                                            }
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            {
                                                this.state.githubRepos.length > 0 ? 
                                                    <React.Fragment>
                                                        <GithubRepos githubRepos={this.state.githubRepos}></GithubRepos>
                                                    </React.Fragment>
                                                :null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default GithubProfileSearch;