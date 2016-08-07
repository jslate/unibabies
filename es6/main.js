import 'phaser-shim';

class Game extends Phaser.Game {
  constructor() {
    super(500, 500, Phaser.AUTO, 'content', null);
    this.state.add('GameState', GameState, false);
    this.state.start('GameState');
  }
}

class GameState extends Phaser.State {
  preload() {
    this.game.load.image('mushroom', '/images/mushroom2.png');
  }

  create() {
    let center = { x: this.game.world.centerX, y: this.game.world.centerY }
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

class Player extends Phaser.Sprite {
  constructor(game, x, y, key) {
    super(game, x, y, key);
    this.game.stage.addChild(this);
  }
}

new Game();