import React, { Component } from 'react';
import oStyle from './ObjectMenu.module.css';


class ObjectMenu extends Component {
    selected;
    choose = (e) => {
        if (this.selected)
        {
            this.selected.className = oStyle.elem;
        }
        this.selected = e.target;
    };
    chooseObject(e) {
        console.log(e.target.innerHTML);
        if (e.target.tagName === 'P') {
            this.choose(e);
            e.target.className = oStyle.elem + ' ' + oStyle.active;
            let action = {type : 'SET-OBJECT', objectName: e.target.innerHTML};
            this.props.dispatch(action);
        }

    }

    render() {
        return (
            <div className={oStyle.menu} onClick={this.chooseObject.bind(this)}>
                <p className={oStyle.elem}>Stick</p>
                <p className={oStyle.elem}>Bamboo</p>
                <p className={oStyle.elem}>Brick</p>
            </div>
            );
    }
}

export default ObjectMenu;
