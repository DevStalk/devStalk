import styles from './letter-animation.module.scss';
import gsap from 'gsap';

/* eslint-disable-next-line */
export interface LetterAnimationProps {}

export function LetterAnimation(
  line: string,
  type: string,
  letterClass: string,
  containerClass: string
) {
  if (type === 'letter') {
    let words = [];
    words = line.split(' ');
    return (
      <div className={`${styles.splitting} ${containerClass}`}>
        <div className={styles.lines}>
          {words.map((word) => {
            let chars = [];
            chars = word.split('');
            return (
              <>
                <span key={word} className={styles.word}>
                  {chars.map((char) => {
                    return (
                      <span
                        key={`${word} - ${char}`}
                        className={`${styles.char} ${letterClass}`}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
                <span className={styles.char}>&nbsp;</span>
              </>
            );
          })}
        </div>
      </div>
    );
  } else if (type === 'word') {
    return <div></div>;
  } else {
    return <div></div>;
  }
}

export default LetterAnimation;
