import { css } from '@/styled-system/css';
import { circle, hstack } from '@/styled-system/patterns';

export default function Home() {
  return (
    <main>
      <div className={circle({ size: 24, overflow: 'hidden' })}>
        <div
          className={css({
            backgroundColor: 'red',
          })}
        >
          dㅓㅇㅓㅁ준식
        </div>
      </div>
      <div className={hstack({ gap: 4 })}>
        <h2 className={css({ color: 'gray' })}>안냐썌염</h2>
        <h2 className={css({ color: 'gray' })}>안냐썌염</h2>
        <h2 className={css({ color: 'gray' })}>안냐썌염</h2>
      </div>
    </main>
  );
}
