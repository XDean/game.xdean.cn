import { PhaserGame } from '../../phaser/react';
import { config } from './config';

export default () => {
  return (
    <div>
      <PhaserGame config={config}/>
    </div>
  );
};