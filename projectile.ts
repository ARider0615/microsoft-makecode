class Projectile {
    sprite: Sprite;

    constructor(cannon: Sprite, velocity: number) {
        this.sprite = sprites.createProjectileFromSprite(ProjectileImage, cannon, 0, -velocity);
        this.sprite.setFlag(SpriteFlag.AutoDestroy, true);
    }
}