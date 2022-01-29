import Phaser from 'phaser';
import { Assets } from '../assets';

export class Player extends Phaser.Physics.Arcade.Sprite {
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, Assets.player.key);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setGravityY(800);
    this.setBounce(0.1);
    this.setCollideWorldBounds(true);
    this.play(Assets.player.anims.stay.key);
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  protected preUpdate(time: number, delta: number) {
    super.preUpdate(time, delta);

    if (this.cursors.left.isDown) {
      this.setVelocityX(-160);
      this.anims.play(Assets.player.anims.left.key, true);
    } else if (this.cursors.right.isDown) {
      this.setVelocityX(160);
      this.anims.play(Assets.player.anims.right.key, true);
    } else {
      this.setVelocityX(0);
      this.anims.play(Assets.player.anims.stay.key);
    }
  }
}