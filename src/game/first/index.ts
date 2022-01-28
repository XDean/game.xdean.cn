import dynamic from 'next/dynamic';

export const First = dynamic(() => import('./main'), {ssr: false});
