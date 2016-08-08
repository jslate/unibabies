import Player from './Player'

class SceneState extends Phaser.State {

  constructor() {
    super();
    this.move_speed = 1;
  }

  preload() {
    this.game.load.image('mushroom', '/images/mushroom2.png');
  }

  preCreate() {
    const center = { x: this.game.world.centerX, y: this.game.world.centerY }
    this.game.physics.startSystem(Phaser.Physics.Arcade);
    this.player = new Player(this.game, center.x, center.y, 'mushroom');
    this.game.physics.arcade.enable(this.player);
  }

}

export default SceneState;
