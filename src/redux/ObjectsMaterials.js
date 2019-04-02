import brokenStickImg from '../resources/brockenStick.png';
import stickImg from '../resources/stick.png';
import brokenBambooImg from '../resources/brokenbamboo.png';
import bambooImg from '../resources/bamboo.png';
import brokenBrickImg from '../resources/brokenBrick.png';
import brickImg from '../resources/brick.png';

export var materials = [];
var stick = {
    id: 0,
    name: 'Stick',
    type: 'wood',
    hp: 20,
    maxHp: 20,
    damage: 5,
    moneyPerHit: 1,
    money: 100,
    brokeCount: 0,
    currentImg: stickImg,
    img: stickImg,
    brokenImg: brokenStickImg,
    broken: false,
};
materials.push(stick);
var bamboo = {
    id: 1,
    name: 'Bamboo',
    type: 'wood',
    hp: 200,
    maxHp: 200,
    damage: 10,
    moneyPerHit: 3,
    money: 300,
    brokeCount: 0,
    currentImg: bambooImg,
    img: bambooImg,
    brokenImg: brokenBambooImg,
    broken: false,
};
materials.push(bamboo);
var brick = {
    id: 2,
    name: 'Brick',
    type: 'stone',
    hp: 1000,
    maxHp: 1000,
    damage: 25,
    moneyPerHit: 10,
    money: 900,
    brokeCount: 0,
    currentImg: brickImg,
    img: brickImg,
    brokenImg: brokenBrickImg,
    broken: false,
};
materials.push(brick);
