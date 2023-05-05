class Invader {
    sprite: Sprite;
    xpos: number;
    velocity: {
        x: number,
        y: number
    };

    constructor() {
        this.sprite = sprites.create(InvaderImage, SpriteKind.Enemy);

        this.xpos = randint(10, 150);
        this.velocity = {
            x: 0,
            y: randint(10, 50)
        };

        this.sprite.setPosition(this.xpos, 0);
        this.sprite.setVelocity(this.velocity.x, this.velocity.y);
        this.sprite.setScale(0.5);
        this.sprite.setFlag(SpriteFlag.AutoDestroy, true);
    }
}