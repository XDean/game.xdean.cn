import Phaser from 'phaser';
import { loadAsset } from '../../phaser/util';
import { Assets } from './assets';

export class NSShaftScene extends Phaser.Scene {
  constructor() {
    super('ns-shaft');
  }

  preload() {
    this.load.setBaseURL('/assets/ns-shaft');
    Object.values(Assets).forEach(e => loadAsset(this.load, e));
  }

  create() {
    const platforms = this.physics.add.staticGroup();
    (platforms.create(0, 400, Assets.wall.key) as Phaser.Physics.Arcade.Image).setScale(2).refreshBody();
    (platforms.create(600, 400, Assets.wall.key) as Phaser.Physics.Arcade.Image).setScale(2).refreshBody();
    const player = this.add.sprite(200, 200, Assets.player.key);
  }
}