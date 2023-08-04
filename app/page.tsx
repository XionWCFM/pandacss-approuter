import { css } from '@/styled-system/css';
import { circle, hstack } from '@/styled-system/patterns';
import Component from './_components/Component';

export default function Home() {
  return (
    <main>
      <div className={circle({ size: 24, overflow: 'hidden' })}></div>
      <div className={hstack({ gap: 4 })}></div>
      <Component />
    </main>
  );
}
