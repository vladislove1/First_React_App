import React, { Component } from 'react';

class Money extends Component {

    render() {
        return (
            <div className='money'>
                <p className='gold'>Gold:</p><span>{' ' + this.props.state.character.money}</span>
            </div>
        );
    }
}

export default Money;
