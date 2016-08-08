class Character extends Phaser.Sprite {
  constructor(game, x, y, key) {
    super(game, x, y, key);
    this.game.stage.addChild(this);
    this.move_speed = 1;
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

  moveAndTalk(array) {
    let startAtTime = 0;
    array.forEach((obj) => {
      setTimeout(() => {
        this.move(obj.distance, obj.direction, () => this.speak(obj.message));
      }, startAtTime);
      startAtTime += obj.distance * this.move_speed + obj.pause * 1000;
    });

  }
  move(distance, direction, callback) {
    let i = 0;
    let interval;
    interval = setInterval(() => {
      if (direction == 'right') { this.x += 1; }
      if (direction == 'left') { this.x -= 1; }
      if (direction == 'up') { this.y += 1; }
      if (direction == 'down') { this.y -= 1; }
      i++;
      if (i >= distance) {
        clearInterval(interval);
        callback();
      }
    }, this.move_speed);
  }

}

export default Character;
