import Phaser from 'phaser';
import { SpriteSheet } from '../../phaser/api';
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
    Object.values(Assets)
      .filter(e => e.type === 'sprite-sheet')
      .map(e => e as SpriteSheet<any>)
      .forEach(e => {
        Object.values(e.anims).forEach(({frames, ...rest}) => {
          this.anims.create({
            frames: frames.map(f => ({key: e.key, frame: f})),
            ...rest,
          });
        });
      });
    player.play(Assets.player.anims.stay.key)

  }
}