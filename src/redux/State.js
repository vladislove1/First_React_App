import {materials} from './ObjectsMaterials'

class Store {
    refreshHpTimerId;

    constructor(name = 'name', materials) {
        this.data = {
            character: {
                name: name,
                maxHp: 100,
                hp: 100,
                hpRegenPerSec: 1,
                damage: 1,
                criticalChance: 1,
                money: 0,
            },
            shop: {
                maxHpPrice: 20,
                hpRegenPerSecPrice: 20,
                damagePrice: 50,
                criticalChancePrice: 100,
            },
            objSpecifications: {
                name: undefined,
                hp: undefined,
                damage: 0,
                moneyPerHit: undefined,
                money: undefined,
                brokeCount: 0,
                img: undefined,
            },
            start: false,
            stunned: false
        };
        this.materials = materials;
    }

    setObject(objectName) {
        for (let i = 0; i < this.materials.length; i++) {
            if (this.materials[i].name === objectName) {
                this.data.objSpecifications = this.materials[i];
                if (this.data.start === true)
                    this.reRender();
            }
        }
    }

    getData() {
        return this.data;
    }

    stun() {
        this.data.start = false;
        this.data.stunned = true;
        clearInterval(this.refreshHpTimerId);
        this.refreshHpTimerId = null;
        setTimeout(this.refreshHp.bind(this), 5000);
        this.data.character.hp = 0;
    }

    damage(actionClassName) {
        if (this.refreshHpTimerId == null || this.data.objSpecifications.broken) {
            return;
        }
        if (actionClassName === 'image' && this.data.start) {
            let chance = (Math.random() < this.data.character.criticalChance / 100);
            console.log(chance);
            this.data.character.hp -= this.data.objSpecifications.damage;
            this.data.character.money += this.data.objSpecifications.moneyPerHit;
            if (chance) {
                this.data.objSpecifications.hp -= this.data.character.damage * 2;
            } else {
                this.data.objSpecifications.hp -= this.data.character.damage;
            }
            if (this.data.objSpecifications.hp < 1) {
                this.data.objSpecifications.hp = 0;
                this.data.objSpecifications.broken = true;
                this.data.objSpecifications.currentImg = this.data.objSpecifications.brokenImg;
                setTimeout(() => {
                    this.data.objSpecifications.broken = false;
                    this.data.objSpecifications.currentImg = this.data.objSpecifications.img;
                    this.data.objSpecifications.hp = this.data.objSpecifications.maxHp;
                    this.data.objSpecifications.brokeCount++;
                }, 2000);

            }

            if (this.data.character.hp < 0) {
                this.stun();
            }
            this.reRender();
        }
    }

    refreshHp() {
        if (this.data.start === false) {
            this.data.start = true;
            this.data.stunned = false;
            this.refreshHpTimerId = setInterval(() => {
                if (this.data.character.hp < this.data.character.maxHp) {
                    this.data.character.hp += this.data.character.hpRegenPerSec;
                    if (this.data.character.hp > this.data.character.maxHp) {
                        this.data.character.hp = this.data.character.maxHp;
                    }
                    this.reRender();
                }
            }, 1000);
            this.reRender();
        }
    }

    subscribe(observer) {
        this.reRender = observer;
    };

    reRender() {
        console.log("something");
    };

    dispatch(action) {
        if (action.type === 'REFRESH-HP') {
            this.refreshHp();
        } else if (action.type === 'DAMAGE') {
            this.damage(action.event.className);
        } else if (action.type === 'SET-OBJECT') {
            this.setObject(action.objectName);
        } else if (action.type === 'BUY-ABILITY') {
            if (action.id === '1') {
                if (this.data.character.money >= this.data.shop.maxHpPrice) {
                    this.data.character.maxHp += 5;
                    this.data.character.money -= this.data.shop.maxHpPrice;
                    Math.floor(this.data.shop.maxHpPrice +=  this.data.shop.maxHpPrice / 2);
                    this.reRender();
                }
            } else if (action.id === '2') {
                if (this.data.character.money >= this.data.shop.hpRegenPerSecPrice) {
                    this.data.character.hpRegenPerSec += 1;
                    this.data.character.money -= this.data.shop.hpRegenPerSecPrice;
                    Math.floor(this.data.shop.hpRegenPerSecPrice +=  this.data.shop.hpRegenPerSecPrice / 2);
                    this.reRender();
                }
            } else if (action.id === '3') {
                if (this.data.character.money >= this.data.shop.damagePrice) {
                    this.data.character.damage += 1;
                    this.data.character.money -= this.data.shop.damagePrice;
                    Math.floor(this.data.shop.amagePrice +=  this.data.shop.amagePrice / 2);
                    this.reRender();
                }
            } else if (action.id === '4') {
                if (this.data.character.money >= this.data.shop.criticalChancePrice) {
                    this.data.character.criticalChance += 1;
                    this.data.character.money -= this.data.shop.criticalChancePrice;
                    Math.floor(this.data.shop.criticalChancePrice +=  this.data.shop.criticalChancePrice / 2);
                    this.reRender();
                }
            }
        }
    };
}

export let store = new Store('Vlad', materials);



