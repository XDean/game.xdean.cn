import { Asset } from '../../phaser/api';

export namespace Assets {
  export const ceiling: Asset = {
    type: 'image',
    key: 'ceiling',
    url: 'ceiling.png',
  };
  export const conveyor_left: Asset = {
    type: 'sprite-sheet',
    key: 'conveyor_left',
    url: 'conveyor_left.png',
    frame: {
      width: 96,
      height: 16,
    },
  };
  export const conveyor_right: Asset = {
    type: 'sprite-sheet',
    key: 'conveyor_right',
    url: 'conveyor_right.png',
    frame: {
      width: 96,
      height: 16,
    },
  };
  export const fake: Asset = {
    type: 'sprite-sheet',
    key: 'fake',
    url: 'fake.png',
    frame: {
      width: 96,
      height: 36,
    },
  };
  export const nails: Asset = {
    type: 'image',
    key: 'nails',
    url: 'nails.png',
  };
  export const normal: Asset = {
    type: 'image',
    key: 'normal',
    url: 'normal.png',
  };
  export const player: Asset = {
    type: 'sprite-sheet',
    key: 'player',
    url: 'player.png',
    frame: {
      width: 32,
      height: 32,
    },
  };
  export const trampoline: Asset = {
    type: 'sprite-sheet',
    key: 'trampoline',
    url: 'trampoline.png',
    frame: {
      width: 96,
      height: 22,
    },
  };
  export const wall: Asset = {
    type: 'image',
    key: 'wall',
    url: 'wall.png',
  };
}