import React, { Component } from 'react';
import abilityStyle from '../ability.module.css';


class CharacterPanel extends Component {
    render() {
        return (
            <div className={abilityStyle.characterPanel}>
                <p>max hp = {this.props.character.maxHp}</p>
                <p>hp regen = {this.props.character.hpRegenPerSec}</p>
                <p>damage = {this.props.character.damage}</p>
                <p>critical = {this.props.character.criticalChance}</p>
            </div>
        );
    }
}

export default CharacterPanel;
