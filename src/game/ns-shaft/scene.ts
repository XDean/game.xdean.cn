import Phaser from 'phaser';
import { SpriteSheet } from '../../phaser/api';
import { loadAsset } from '../../phaser/util';
import { Assets } from './assets';
import { Board } from './sprite/board';
import { Ceiling } from './sprite/ceiling';
import { Player } from './sprite/player';
import { Wall } from './sprite/wall';

export class NSShaftScene extends Phaser.Scene {

  constructor() {
    super('ns-shaft');
  }

  preload() {
    this.load.setBaseURL('/assets/ns-shaft');
    Object.values(Assets).forEach(e => loadAsset(this.load, e));
  }

  create() {
    Object.values(Assets)
      .filter(e => e.type === 'sprite-sheet')
      .map(e => e as SpriteSheet<any>)
      .forEach(e => Object.values(e.anims).forEach(({frames, ...rest}) =>
        this.anims.create({
          frames: frames.map(f => ({key: e.key, frame: f})),
          ...rest,
        })));

    const statics = this.physics.add.staticGroup();
    statics.add(new Wall(this, 0, 400));
    statics.add(new Wall(this, 600, 400));
    statics.add(new Ceiling(this, 300, 12));

    const player = new Player(this, 300, 50);

    const initBoard = new Board.Normal(this, 300, 600);
    let boards = [initBoard];

    this.physics.add.collider(player, statics);
    this.physics.add.collider(player, initBoard);

    this.update = () => {
      const oldBoards = boards;
      boards = oldBoards.filter(e => e.body.position.y >= -20);
      oldBoards.filter(e => e.body.position.y < -20).forEach(e => e.destroy());
      const maxY = boards.map(e => e.body.position.y).reduce((a, b) => a > b ? a : b);
      if (maxY < 800) {
        const newBoard = new Board.Normal(this, Math.random() * 500 + 50, maxY + 150);
        boards.push(newBoard);
        this.physics.add.collider(player, newBoard);
      }
    };
  }
}