class Invader {
    sprite: Sprite;
    xpos: number;
    velocity: {
        x: number,
        y: number
    };

    constructor() {
        this.sprite = sprites.create(img`
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        .....bdddddddddd55b335c.
        ..cccdddddb55bbddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddd5cb55cbcc....
        cddddddddd5555ccbbc.....
        .cddddddbdd555bbbcc.....
        ..ccdddbbbdd55cbcdc.....
        ....ccbbcbddddccdddcc...
        ......cccdd555dcccccc...
        ........cccccccc........
        `, SpriteKind.Enemy);

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