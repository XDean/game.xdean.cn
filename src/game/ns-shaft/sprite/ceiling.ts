import Phaser from 'phaser';
import { Assets } from '../assets';

// 400 * 16
export class Ceiling extends Phaser.Physics.Arcade.Image {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, Assets.ceiling.key);
    scene.add.existing(this);
    scene.physics.add.existing(this, true);
    this.setScale(1.5).refreshBody();
  }
}