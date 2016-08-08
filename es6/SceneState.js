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

  movePlayerRight(distance, callback) {
    let i = 0;
    let interval;
    interval = setInterval(() => {
      this.player.x += 1;
      i++;
      if (i >= distance) {
        clearInterval(interval);
        callback();
      }
    }, 10);
  }

}

export default SceneState;
