import { assets, image, spriteSheet } from '../../phaser/api';

export const Assets = assets({
  ceiling: image({
    key: 'ceiling',
    url: 'ceiling.png',
  }),
  conveyor_left: spriteSheet({
    key: 'conveyor_left',
    url: 'conveyor_left.png',
    frame: {
      width: 96,
      height: 16,
    },
    anims: {},
  }),
  conveyor_right: spriteSheet({
    key: 'conveyor_right',
    url: 'conveyor_right.png',
    frame: {
      width: 96,
      height: 16,
    },
    anims: {},
  }),
  fake: spriteSheet({
    key: 'fake',
    url: 'fake.png',
    frame: {
      width: 96,
      height: 36,
    },
    anims: {},
  }),
  nails: image({
    key: 'nails',
    url: 'nails.png',
  }),
  normal: image({
    key: 'normal',
    url: 'normal.png',
  }),
  player: spriteSheet({
    key: 'player',
    url: 'player.png',
    frame: {
      width: 32,
      height: 32,
    },
    anims: {
      left: {
        key: 'left',
        frames: [0, 1, 2, 3],
        frameRate: 6,
        repeat: -1,
      },
      damageLeft: {
        key: 'damageLeft',
        frames: [4, 5, 6, 7],
        frameRate: 6,
        repeat: -1,
      },
      stay: {
        key: 'stay',
        frames: [8],
      },
      right: {
        key: 'right',
        frames: [9, 10, 11, 12],
        frameRate: 6,
        repeat: -1,
      },
      damageRight: {
        key: 'damageRight',
        frames: [13, 14, 15, 16],
        frameRate: 6,
        repeat: -1,
      },
      damageStay: {
        key: 'damageStay',
        frames: [17],
      },
    },
  }),
  trampoline: spriteSheet({
    key: 'trampoline',
    url: 'trampoline.png',
    frame: {
      width: 96,
      height: 22,
    },
    anims: {},
  }),
  wall: image({
    key: 'wall',
    url: 'wall.png',
  }),
});