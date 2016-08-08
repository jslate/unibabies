class Character extends Phaser.Sprite {
  constructor(game, x, y, key) {
    super(game, x, y, key);
    this.game.stage.addChild(this);
  }

  speak(message, name) {
    var fullMessage;
    if (name != null) {
      fullMessage = name + ' - ' + message;
    } else {
      fullMessage = message;
    }
    $('#speech').text(fullMessage);
  }
}

export default Character;
