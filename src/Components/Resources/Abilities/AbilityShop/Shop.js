import React, { Component } from 'react';
import abilityStyle from '../ability.module.css';

class Shop extends Component {
    buyAbility(e){
        if (e.target.tagName === 'P') {
            debugger;
            this.props.dispatch({type : 'BUY-ABILITY', id : e.target.id});
        }
    }
    render() {
        return (
            <div className={abilityStyle.panel} onClick={this.buyAbility.bind(this)}>
                <p id='1' className={abilityStyle.ability}>
                    + max hp
                    <span className={abilityStyle.price}>Price: {this.props.state.shop.maxHpPrice}</span>
                </p>
                <p id='2' className={abilityStyle.ability}>
                    + hp regen
                    <span className={abilityStyle.price}>Price: {this.props.state.shop.hpRegenPerSecPrice}</span>
                </p>
                <p  id='3' className={abilityStyle.ability}>
                    + damage
                    <span className={abilityStyle.price}>Price: {this.props.state.shop.damagePrice}</span>
                </p>
                <p id='4' className={abilityStyle.ability}>
                    + critical % damage
                    <span className={abilityStyle.price}>Price: {this.props.state.shop.criticalChancePrice}</span>
                </p>
            </div>
        );
    }
}

export default Shop;
