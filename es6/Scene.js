import SceneState from './SceneState'

class Scene extends SceneState {
  create() {
    this.preCreate();
    this.moveAndTalk([
      {distance: 100, direction: 'right', message: 'I am here'},
      {distance: 100, direction: 'left', message: 'I am there'},
      {distance: 100, direction: 'up', message: 'I am...'},
      {distance: 100, direction: 'down', message: 'everywhere!'},
    ]);
  }


}

export default Scene;
