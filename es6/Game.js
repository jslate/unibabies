import 'phaser-shim';
import Level from './Level.js'
import Scene from './Scene.js'

import $ from 'jquery';
import jQuery from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

class Game extends Phaser.Game {
  constructor() {
    super(800, 600, Phaser.AUTO, 'thegame', null);
    this.state.add('Scene', Scene, false);
    this.state.add('Level', Level, false);
    this.state.start('Scene');

    setTimeout(()=> {
      this.state.start('Level');
      this.announce('Welcome!');
    }, 30000);
  }

  announce(message) {
    $('#speech').text(message);
  }

}

new Game();
