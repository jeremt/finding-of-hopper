export class GameContext {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.canvas.width = 1024;
        this.canvas.height = 1024;
        this.context = this.canvas.getContext('2d');

        // handle keyboard
        this.keys = {
            left: false,
            up: false,
            right: false,
            down: false,
            x: false,
            c: false
        };
    }

    async load() {}

    draw() {
        throw new ReferenceError('draw() should be implemented in your game.');
    }

    update() {
        throw new ReferenceError('update() should be implemented in your game.');
    }

    async start() {
        await this.load();

        this.keydownListener = (e) => {
            if (e.key === 'ArrowLeft') { this.keys.left = true }
            if (e.key === 'ArrowUp') { this.keys.up = true } 
            if (e.key === 'ArrowRight') { this.keys.right = true } 
            if (e.key === 'ArrowDown') { this.keys.down = true } 
            if (e.key === 'x') { this.keys.x = true } 
            if (e.key === 'c') { this.keys.c = true }
        };
        document.addEventListener('keydown', this.keydownListener);
        
        this.keyupListener = (e) => {
            if (e.key === 'ArrowLeft') { this.keys.left = false }
            if (e.key === 'ArrowUp') { this.keys.up = false } 
            if (e.key === 'ArrowRight') { this.keys.right = false } 
            if (e.key === 'ArrowDown') { this.keys.down = false } 
            if (e.key === 'x') { this.keys.x = false } 
            if (e.key === 'c') { this.keys.c = false }
        };
        document.addEventListener('keyup', this.keyupListener);

        this.isStarted = true;
    
        const gameLoop = () => {
            if (!this.isStarted) {
                return;
            }
            this.draw();
            this.update();
            requestAnimationFrame(gameLoop);
        }
    
        requestAnimationFrame(gameLoop);
    }

    stop() {
        this.isStarted = false;
        document.removeEventListener('keydown', this.keydownListener);
        document.removeEventListener('keyup', this.keyupListener);
    }

}