import Phaser from 'phaser';
import { Assets } from '../assets';

export class Board extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setImmovable(true);
    this.setPushable(false);
    this.setFriction(1, 1);
    this.setVelocityY(-100);
  }

  protected preUpdate(time: number, delta: number) {
    super.preUpdate(time, delta);
  }
}

export namespace Board {
  export class Normal extends Board {
    constructor(scene: Phaser.Scene, x: number, y: number) {
      super(scene, x, y, Assets.normal.key);
    }
  }
}