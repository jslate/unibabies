import 'phaser-shim';

class Game extends Phaser.Game {

  constructor() {
    super(800, 600, Phaser.CANVAS, 'content', null);
  }
}

new Game();
