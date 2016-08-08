import Player from './Player'

class SceneState extends Phaser.State {
  preload() {
    this.game.load.image('mushroom', '/images/mushroom2.png');
  }

  preCreate() {
    const center = { x: this.game.world.centerX, y: this.game.world.centerY }
    this.game.physics.startSystem(Phaser.Physics.Arcade);
    this.player = new Player(this.game, center.x, center.y, 'mushroom');
    this.game.physics.arcade.enable(this.player);
  }

  moveAndTalk(array) {
    let startAtTime = 0;
    array.forEach((obj) => {
      setTimeout(() => {
        this.movePlayer(obj.distance, obj.direction, () => this.player.speak(obj.message));
      }, startAtTime);
      console.log(startAtTime);
      startAtTime += obj.distance * 20;
    });

  }

  movePlayerRight(distance, callback) { this.movePlayer(distance, 'right', callback);  }
  movePlayerLeft(distance, callback) { this.movePlayer(distance, 'left', callback);  }
  movePlayerUp(distance, callback) { this.movePlayer(distance, 'up', callback);  }
  movePlayerDown(distance, callback) { this.movePlayer(distance, 'down', callback);  }

  movePlayer(distance, direction, callback) {
    let i = 0;
    let interval;
    interval = setInterval(() => {
      if (direction == 'right') { this.player.x += 1; }
      if (direction == 'left') { this.player.x -= 1; }
      if (direction == 'up') { this.player.y += 1; }
      if (direction == 'down') { this.player.y -= 1; }
      i++;
      if (i >= distance) {
        clearInterval(interval);
        callback();
      }
    }, 20);
  }

}

export default SceneState;
