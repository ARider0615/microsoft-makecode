const godMode = false;

function handleEnemyDestroy(sprite: Sprite) {
    if (sprite.y > screen.height && !godMode) {
        game.gameOver(false)
    } else {
        info.changeScoreBy(1)
    }
}

function getInvaderTime() {
    score = info.score();

    // 2000 milliseconds default (2 seconds);
    let time = 2000;

    if (score >= 10) time = 1500;
    if (score >= 20) time = 1000;
    if (score >= 50) time = 500;
    if (score >= 100) time = 200;
    if (score >= 150) time = 150;
    if (score >= 200) time = 100;
    if (score >= 250) time = 50;
    if (score >= 300) time = 40;
    if (score >= 310) time = 30;
    if (score >= 315) time = 20;
    if (score >= 320) time = 10;
    if (score >= 325) time = 9;
    if (score >= 326) time = 8;
    if (score >= 327) time = 7;
    if (score >= 328) time = 6;
    if (score >= 329) time = 5;
    if (score >= 330) time = 4;
    if (score >= 331) time = 3;
    if (score >= 332) time = 2;
    if (score >= 333) time = 1;
    if (score >= 334) time = 0;

    console.log(score + ":" + time);

    return time;
}
function addEvents() {
    sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
        handleEnemyDestroy(sprite);
    });
    sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
        animation.runImageAnimation(
            otherSprite,
            ExplosionImages,
            100,
            false
        );
        pause(400);
        if (!godMode) sprites.destroy(sprite);
        sprites.destroy(otherSprite);
    });
}
function addController() {
    if (!godMode) {
        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            new Projectile(cannon, 1000);
        });
    } else {
        forever(() => {
            new Projectile(cannon, 1000);
        })
    }
    controller.moveSprite(cannon, 100, 0)
}

const infoMessages: String[] = [
    "Press A/D keys or RArrow/LArrow keys to move left and right.",
    "Press A (spacebar) button to shoot a projectile.",
    "Kill as many enemy's as you can!",
    "And finally, the game will get progressively harder as you continue."
];

function start() {
    infoMessages.forEach(message => {
        game.splash(message)
    })
    scene.setBackgroundImage(BackgroundImage)
    cannon = sprites.create(CannonImage, SpriteKind.Player)
    cannon.setStayInScreen(true)
    cannon.setPosition(80, 110)
    forever(function () {
        new Invader();
        pause(getInvaderTime());
    });
    addController()
    addEvents()
}
let time = 0
let score = 0
let cannon: Sprite = null
start()
