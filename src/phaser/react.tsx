import Phaser from 'phaser';
import { useEffect, useRef } from 'react';
import { PhaserConfig } from './api';

type Props = {
  config: PhaserConfig
}

let globalId = 0;

export const PhaserGame = (props: Props) => {
  const {config} = props;
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) {
      return;
    }
    const id = 'phaser-game-' + globalId++;
    const game = new Phaser.Game(config({parentId: id}));
    return () => game.destroy(true);
  }, [ref]);
  return <div ref={ref}/>;
};