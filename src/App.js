import React from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Card from './components/Card';
import ProfileCard from './components/Pops and state/state/profilecard';
import EventCard from './components/Event Binding/eventcard'
import ProductItem from './components/Event Binding/productitem';
import FormEvent from './components/Event Binding/Formevent';
import FormEventBind from './components/Event Binding/Form Event/Formevent'
import Conditional from './components/Conditional and looping/Conditional';
import Looping from './components/Conditional and looping/Looping';
import ConditionalCheck from './components/Conditional and looping/Conditionalchek';
import Parentcomponent from './components/Component Interaction/Basic /Parentcomponent';
import ParentComponentI from './components/Component Interaction/Intermediate/ParentComponent';
import LifeCycle from './components/Life-cycle-of-component/LifeCycle';
import HttpCall from './components/Http Call axios/HttpCall';
import ContactHead from './components/Contact App/contacthead';
import GithubProfileSearch from './components/Github-Profile-Search/GithubProfileSearch';
import HomeCA from './components/Component Interaction/Advaced/Home';
import ContextAPI from './components/Component Interaction/Context-Api/context-Api';
import PropsDrilling from './components/Component Interaction/Props Drilling/Props-Dilling';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      // clientMesssage : '',
      // serverMessage : '',
      // UserInfo : {
      //   Name : 'Juned',
      //   Email : 'davdajuned7698@gmail.com',
      //   Username : 'Junee',
      //   Age : 20
      // }
    }
  }

  // servermessage = (data) => {
  //   this.setState({
  //     ...this.state,
  //     serverMessage : data
  //   })
  // }

  // clientmessage = (data) => {
  //   this.setState({
  //     ...this.state,
  //     clientMesssage : data
  //   })
  // }

  render() { 
    return (
      <React.Fragment>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Landingpage}></Route>
            
            <Route exact path="/pops" component={Card}></Route>
            <Route exact path="/state" component={ProfileCard}></Route>

            <Route exact path="/condition" component={Conditional}></Route>
            <Route exact path="/conditioncheck" component={ConditionalCheck}></Route>
            <Route exact path="/Loop" component={Looping}></Route>

            <Route exact path="/Eventcard" component={EventCard}></Route>
            <Route exact path="/Formevent" component={FormEvent}></Route>
            <Route exact path="/Productitem" component={ProductItem}></Route>
            <Route exact path="/Formeventbind" component={FormEventBind}></Route>

            <Route exact path="/Basic" component={Parentcomponent}></Route>
            <Route exact path="/InterMediate" component={ParentComponentI}></Route>
            <Route exact path="/Advanced" component={HomeCA}></Route>
            <Route exact path="/Context-API" component={ContextAPI}></Route>
            <Route exact path="/Props-Drillling" component={PropsDrilling}></Route>

            <Route exact path="/Http-call-axios" component={HttpCall}></Route>
            <Route exact path="/Life-Cycle-of-component" component={LifeCycle}></Route>

            <Route exact path="/Github-Profile-Search" component={GithubProfileSearch}></Route>
            <Route exact path="/Contact-App" component={ContactHead}></Route>
            
          </Switch>
        </Router>

        {/* <Landingpage></Landingpage>
        <Card></Card>
        <Contact></Contact>
        <Cardprops></Cardprops>
        <ProfileCard></ProfileCard>
        <EventCard></EventCard>
        <ProductItem></ProductItem>
        <FormEvent></FormEvent>
        <FormEventBind></FormEventBind>
        <Conditional></Conditional>
        <ConditionalCheck></ConditionalCheck>
        <Looping></Looping>
        <Parentcomponent></Parentcomponent>
        <ParentComponentI></ParentComponentI>
        <div className="row mt-3">
          <div className="col-md-6">
            <ParentComponentA sendData={this.servermessage} clientMesssage={this.state.clientMesssage}></ParentComponentA>
          </div>
          <div className="col-md-6">
            <ChildComponentA serverMessage={this.state.serverMessage} sendData={this.clientmessage}></ChildComponentA>
          </div>
        </div>

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

        <LifeCycle></LifeCycle>
        <HttpCall></HttpCall>
        <ContactHead></ContactHead>
        <GithubProfileSearch></GithubProfileSearch> */}
      </React.Fragment>
    );
  }
}
 
export default App;