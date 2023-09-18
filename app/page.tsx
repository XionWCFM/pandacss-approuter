import { css } from '@/styled-system/css';
import { circle, hstack } from '@/styled-system/patterns';
import Component from './_components/Component';

export default function Home() {
  return (
    <main
      className={`${css({
        w: 500,
        h: 400,
        display: 'flex',
        overflow: 'scroll',
      })} content`}
    >
      <div className={circle({ size: 24, overflow: 'hidden' })}></div>
      <div
        className={hstack({ gap: 4 })}
        style={{
          scrollbarColor: 'red',
        }}
      ></div>
      <div
        className={`${css({
          w: '40px',
          h: '20px',
        })}`}
      >
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads dsadsads
        dsadsads dsadsads dsadsads dsadsads
      </div>
    </main>
  );
}
