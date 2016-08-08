class Character extends Phaser.Sprite {
  constructor(game, x, y, key) {
    super(game, x, y, key);
    this.game.stage.addChild(this);
  }

  speak(message) {
    $('#speech').text(message);
  }
}

export default Character;
