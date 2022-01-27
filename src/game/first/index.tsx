import { useEffect, useRef } from 'react';
import game from './game';

export const First = () => {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) {
      return;
    }
    game.getFrame();
  }, [ref]);
  return (
    <div>
      First
      <div ref={ref}/>
    </div>
  );
};