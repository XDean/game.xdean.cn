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

    const platforms = this.physics.add.staticGroup();
    (platforms.create(0, 400, Assets.wall.key) as Phaser.Physics.Arcade.Image).setScale(2).refreshBody();
    (platforms.create(600, 400, Assets.wall.key) as Phaser.Physics.Arcade.Image).setScale(2).refreshBody();
    (platforms.create(300, 12, Assets.ceiling.key) as Phaser.Physics.Arcade.Image).setScale(1.5).refreshBody();

    const player = this.physics.add.sprite(200, 200, Assets.player.key);
    player.setBounce(0.1);
    player.setCollideWorldBounds(true);
    player.play(Assets.player.anims.stay.key);
    this.physics.add.collider(player, platforms);
    const cursors = this.input.keyboard.createCursorKeys();

    this.update = () => {
      if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player.anims.play(Assets.player.anims.left.key, true);
      } else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play(Assets.player.anims.right.key, true);
      } else {
        player.setVelocityX(0);
        player.anims.play(Assets.player.anims.stay.key);
      }
    };
  }
}