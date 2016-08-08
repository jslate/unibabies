import Player from './Player'

class GameState extends Phaser.State {
  preload() {
    this.game.load.image('mushroom', '/images/mushroom2.png');
  }

  create() {
    const center = { x: this.game.world.centerX, y: this.game.world.centerY }
    this.game.physics.startSystem(Phaser.Physics.Arcade);
    this.player = new Player(this.game, center.x, center.y, 'mushroom');
    this.game.physics.arcade.enable(this.player);
    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.right.isDown) {
      this.player.body.velocity.x += 10
    }
    if (this.cursors.left.isDown) {
      this.player.body.velocity.x -= 10
    }
    if (this.cursors.up.isDown) {
      this.player.body.velocity.y -= 10
    }
    if (this.cursors.down.isDown) {
      this.player.body.velocity.y += 10
    }
  }
}

export default GameState;
