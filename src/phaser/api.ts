import type Phaser from 'phaser';

export type PhaserConfig = (params: {
  parentId: string
}) => Phaser.Types.Core.GameConfig

export type Image = {
  type: 'image',
  key: string,
  url: string
}

export function image(i: Omit<Image, 'type'>): Image {
  return {type: 'image', ...i};
}

export type SpriteSheet<A extends string> = {
  type: 'sprite-sheet',
  key: string,
  url: string,
  frame: {
    width: number,
    height: number,
  }
  anims: {
    [K in A]: {
      key: string, frames: number[]
    }
    & Omit<Phaser.Types.Animations.Animation, 'frames'>
  }
}

export function spriteSheet<T extends string>(ss: Omit<SpriteSheet<T>, 'type'>): SpriteSheet<T> {
  return {type: 'sprite-sheet', ...ss};
}

export type Asset = Image | SpriteSheet<any>

export function assets<T extends {
  [K in string]: T[K] & Asset
}>(assets: T) {
  return assets;
}