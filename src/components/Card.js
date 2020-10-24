import React from 'react';
import Cardcomponent from './Cardcomponent';
import card1 from '../assets/img/card_1.jpg';
import card2 from '../assets/img/card_2.jpg';
import card3 from '../assets/img/card_3.jpg';
import card4 from '../assets/img/card_4.jpg';

class Card extends React.Component{
    render(){
        let contries = ['paris','lonodn','hong kong','singapore'];
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-3 mt-3 col-sm-6">
                            <Cardcomponent cardImg={card1} country={contries[0]}></Cardcomponent>
                        </div>
                        <div className="col-md-3 mt-3 col-sm-6">
                            <Cardcomponent cardImg={card2} country={contries[1]}></Cardcomponent>
                        </div>
                        <div className="col-md-3 mt-3 col-sm-6">
                            <Cardcomponent cardImg={card3} country={contries[2]}></Cardcomponent>
                        </div>
                        <div className="col-md-3 mt-3 col-sm-6">
                            <Cardcomponent cardImg={card4} country={contries[3]}></Cardcomponent>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };
}

export default Card;