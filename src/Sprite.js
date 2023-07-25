export const loadSprite = async (url) => {
    return new Promise((resolve, reject) => {
        const sprite = new Image();
        sprite.src = url;
        sprite.addEventListener('load', () => {
            resolve(sprite);
        });
        sprite.addEventListener('error', (event) => {
            reject(event.message);
        });
    });
};