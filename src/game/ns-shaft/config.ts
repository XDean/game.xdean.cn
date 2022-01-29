import { PhaserConfig } from '../../phaser/api';
import { NSShaftScene } from './scene';

export const config: PhaserConfig = ({parentId}) => ({
  parent: parentId,
  type: Phaser.AUTO,
  width: 600,
  height: 800,
  physics: {
    default: 'arcade',
  },
  scene: [NSShaftScene],
});
