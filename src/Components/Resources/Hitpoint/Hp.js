import React, { Component } from 'react';
import CharacterHp from './Character/CharacterHp';
import ObjectHp from "./Object/ObjectHp";

class Hp extends Component {
    render() {
        return (
            <div>
                <CharacterHp state={this.props.state} />
                <ObjectHp state={this.props.state} />
            </div>

        );
    }
}

export default Hp;
