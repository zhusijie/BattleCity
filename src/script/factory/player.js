import { Tank } from './tank';
import { res } from '../data';
import { inputKey } from '../var';

let playImg = res.img.player;

class Player extends Tank {
  constructor(x, y, direction, type) {
    super(x, y, direction, type);

    this.drawObjParam.unshift(playImg);
    this.shieldLastNum = 200;
    this.hasShield = true;
    this.speed = 4;
  }

  moveState() {
    let pressedDirectionKey = inputKey.directionKey;
    let moveAble = false;
    let changDirectionAble = false;

    if (inputKey[pressedDirectionKey]) {
      moveAble = true;
      if (this.direction !== pressedDirectionKey) {
        changDirectionAble = true;
        this.direction = pressedDirectionKey;
      }
    }

    return [moveAble, changDirectionAble]
  }
}

export { Player };