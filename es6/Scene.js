import SceneState from './SceneState'

class Scene extends SceneState {
  create() {
    this.preCreate();
    this.moveAndTalk([
      {distance: 100, direction: 'right', message: 'I am here', pause: 1},
      {distance: 100, direction: 'left', message: 'I am there', pause: 1},
      {distance: 100, direction: 'up', message: 'I am...', pause: 1},
      {distance: 100, direction: 'down', message: 'everywhere!', pause: 1},
    ]);
  }


}

export default Scene;
