import Phaser from 'phaser';
import { Assets } from '../assets';

export class Wall extends Phaser.Physics.Arcade.Image {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, Assets.wall.key);
    scene.add.existing(this);
    scene.physics.add.existing(this, true);
    this.setScale(2).refreshBody();
  }
}