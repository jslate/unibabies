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
    let player = new Player(this.game, center.x, center.y, 'mushroom');
  }
}

class Player extends Phaser.Sprite {
  constructor(game, x, y, key) {
    super(game, x, y, key);
    this.game.stage.addChild(this);
  }
}

new Game();
