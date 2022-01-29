import type Phaser from 'phaser';

export type PhaserConfig = (params: {
  parentId: string
}) => Phaser.Types.Core.GameConfig

export type Image = {
  type: 'image',
  key: string,
  url: string
}

export type SpriteSheet = {
  type: 'sprite-sheet',
  key: string,
  url: string,
  frame: {
    width: number,
    height: number,
  }
}

export type Asset = Image | SpriteSheet