import React, { Component } from 'react';
import hpStyle from '../hp.module.css';


class ObjectHp extends Component {
    render() {
        return (
            <div>
                {(this.props.state.objSpecifications.hp >= 0) &&
                <div className={hpStyle.objHp}>
                    {this.props.state.objSpecifications.hp + ' x' + this.props.state.objSpecifications.brokeCount}
                </div>}
            </div>

        );
    }
}

export default ObjectHp;
