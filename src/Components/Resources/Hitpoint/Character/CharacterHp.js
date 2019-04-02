import React, { Component } from 'react';
import hpStyle from '../hp.module.css';

class CharacterHp extends Component {

    render() {
        let handlerStyle = {
            width : (this.props.state.character.hp * 100  / this.props.state.character.maxHp) + '%'
        };
        if (this.props.state.stunned === true) {
            debugger;
            handlerStyle = {
                width : 100 + '%', backgroundColor : '#B71420'
            }
        }
        return (
            <div>
                <div className={hpStyle.hp}>
                    <p className={hpStyle.hpCount}>{this.props.state.character.hp}
                        + {this.props.state.character.hpRegenPerSec}/sec</p>
                    <p style={handlerStyle} className={hpStyle.currentHp}> </p>
                </div>
            </div>

        );
    }
}

export default CharacterHp;
