import type Phaser from 'phaser';
import { assertNever } from '../../common/util/base';
import { Asset } from './api';

export function loadAsset(loader: Phaser.Loader.LoaderPlugin, asset: Asset) {
  switch (asset.type) {
    case 'image':
      loader.image(asset.key, asset.url);
      break;
    case 'sprite-sheet':
      loader.spritesheet(asset.key, asset.url, {
        frameWidth: asset.frame.width,
        frameHeight: asset.frame.height,
      });
      break;
    default:
      assertNever(asset);
  }
}