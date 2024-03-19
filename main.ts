namespace SpriteKind {
    export const Icon = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . b b b b b b b b . . . . 
        . . . b b b b b b b b b b . . . 
        . . b b b . . b b . . b b b . . 
        . c b b b . . b b . . b b b b . 
        . c c c b . . b b . . c c b b . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . c b . . . . . . . 
        . . . . . . . c c . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . 7 7 7 . . . . . . . . . 
        . . 7 7 7 . . . . . . . . . . . 
        7 7 7 . . . . . . . . . . . . . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 . . . . . . . . . . . . . 
        . . 7 7 . . . . . . . . . . . . 
        . . . 7 7 . . . . . . . . . . . 
        . . . . 7 7 . . . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 2 . . . . . 
        . . . . . . . . . . 2 2 . . . . 
        . . . . . . . . . . . 2 2 . . . 
        . . . . . . . . . . . . . 2 . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . . . . . . . . . . 2 2 2 . 
        . . . . . . . . . . . 2 2 . . . 
        . . . . . . . . . . 2 2 . . . . 
        . . . . . . . . . 2 2 . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (mySprite.image.equals(otherSprite.image)) {
        info.changeScoreBy(20)
        sprites.destroy(mySprite, effects.disintegrate, 200)
    } else {
        mySprite.setFlag(SpriteFlag.Ghost, true)
        info.changeLifeBy(-1)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        8 8 8 . . . . 8 8 . . . . 8 8 8 
        . 8 8 8 . . . 8 8 . . . 8 8 8 . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        `)
})
function gameplay (list: Image[]) {
    if (Math.percentChance(50)) {
        projectile = sprites.createProjectileFromSide(list[randint(0, 4)], 0, 50)
        mySprite.startEffect(effects.fire, 200)
        projectile.setPosition(80, 0)
    }
}
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 5))
mySprite.setPosition(80, 95)
let list = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . b b b b . . . . . . 
    . . . . . . b b b b . . . . . . 
    . . . . . b b b b b b . . . . . 
    . . . . b b b b b b b b . . . . 
    . . . b b b b b b b b b b . . . 
    . . b b b . . b b . . b b b . . 
    . c b b b . . b b . . b b b b . 
    . c c c b . . b b . . c c b b . 
    . . . . . . . b b . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . c c . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    8 8 8 . . . . 8 8 . . . . 8 8 8 
    . 8 8 8 . . . 8 8 . . . 8 8 8 . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    . . . . 8 8 8 8 8 8 8 8 . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 . . . . . . . . 
    . . . . 7 7 7 . . . . . . . . . 
    . . 7 7 7 . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 . . . . . . . . . . . . . 
    . . 7 7 . . . . . . . . . . . . 
    . . . 7 7 . . . . . . . . . . . 
    . . . . 7 7 . . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 2 . . . . . . 
    . . . . . . . . . 2 2 . . . . . 
    . . . . . . . . . . 2 2 . . . . 
    . . . . . . . . . . . 2 2 . . . 
    . . . . . . . . . . . . . 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . . . . . . . . . . . 2 2 2 . 
    . . . . . . . . . . . 2 2 . . . 
    . . . . . . . . . . 2 2 . . . . 
    . . . . . . . . . 2 2 . . . . . 
    . . . . . . . . . 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
]
info.setLife(4)
gameplay(list)
game.onUpdateInterval(500, function () {
    gameplay(list)
})
