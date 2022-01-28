import { PhaserConfig } from '../../phaser/api';
import HelloWorldScene from './scene';

export const config: PhaserConfig = ({parentId}) => ({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: parentId,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 200},
    },
  },
  scene: [HelloWorldScene],
});
