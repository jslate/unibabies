import SceneState from './SceneState'

class Scene extends SceneState {
  create() {
    this.preCreate();
    this.movePlayerRight(50, () => this.player.speak('It works!'));
  }


}

export default Scene;
