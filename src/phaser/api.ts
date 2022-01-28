import type Phaser from 'phaser';

export type PhaserConfig = (params: {
  parentId: string
}) => Phaser.Types.Core.GameConfig