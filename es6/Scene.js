import SceneState from './SceneState'

class Scene extends SceneState {
  create() {
    this.preCreate();
    this.movePlayerRight(100, () => {
      this.player.speak('It works!', 'Mushroom');
      setTimeout(() => {
        this.movePlayerLeft(100, () => this.player.speak('Amazing, right?!'));
      }, 2000);
    });
  }


}

export default Scene;
