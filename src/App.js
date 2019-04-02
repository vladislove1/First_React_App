import React, {Component} from 'react';
import './App.css';
import Hp from './Components/Resources/Hitpoint/Hp';
import ObjectMenu from './Components/Resources/Objects/ObjectMenu';
import Money from './Components/Resources/Money/Money';
import Shop from "./Components/Resources/Abilities/AbilityShop/Shop";
import CharacterPanel from './Components/Resources/Abilities/AbilityChar/Character';

class App extends Component {

    render() {
        let step = (e) => {
            let action = {type : 'DAMAGE', event: e.target};
            this.props.dispatch(action);
        };
        let refreshHp = () => {
            this.props.dispatch({type : 'REFRESH-HP'});
        };
        return (
            <div className="App">
                {!this.props.state.start && !this.props.state.stunned &&
                <div className="start" onClick={refreshHp}>
                    start game
                </div>}
                <Money state={this.props.state}/>
                <Hp state={this.props.state}/>
                {
                    this.props.state.objSpecifications.currentImg &&
                    <div>
                        <img className='image' onClick={step} src={this.props.state.objSpecifications.currentImg} alt=""/>
                    </div>
                }

                <CharacterPanel character={this.props.state.character} />
                <ObjectMenu dispatch = {this.props.dispatch}
                            state={this.props.state}
                />
                <Shop dispatch={this.props.dispatch}
                      state={this.props.state}/>
            </div>
        );
    }
}

export default App;
