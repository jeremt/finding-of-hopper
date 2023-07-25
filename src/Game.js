import {GameContext} from './GameContext';
import {loadSprite} from './Sprite';

export class Game extends GameContext {
    constructor() {
        super();
        this.playerPosition = {x: 512 - 64, y: 512 - 64};
    }

    async load() {
        this.playerSprite = await loadSprite('/player.png');
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(this.playerSprite, this.playerPosition.x, this.playerPosition.y, 90, 120);
    }

    update() {
        if (this.keys.left) {
            this.playerPosition.x -= 5;
        }
        if (this.keys.up) {
            this.playerPosition.y -= 5;
        }
        if (this.keys.right) {
            this.playerPosition.x += 5;
        }
        if (this.keys.down) {
            this.playerPosition.y += 5;
        }
    }
}
