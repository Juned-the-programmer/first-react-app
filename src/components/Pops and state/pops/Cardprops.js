import React from 'react';
import Cardpropscomponent from './Cardpropscomponent'
import card1 from './assets/img/card_1.jpg';

class Cardprops extends React.Component {
    render() { 
        let countries = ['japan','tokyo','new Zelend','England']
        return (  
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-3">
                            <Cardpropscomponent cardimg={card1} Countries={countries[0]}></Cardpropscomponent>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Cardprops;