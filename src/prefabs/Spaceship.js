class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        this.points = pointValue
        this.moveSpeed = 3
    }

    update() {
        //moves ship left
        this.x -= this.moveSpeed

        //wraps ship round screen
        if(this.x <= 0 - this.width) {
            this.x = game.config.width
        }
    }

    //resets pos
    reset() {
        this.x = game.config.width
    }
}