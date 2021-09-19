import styles from './text-splitting.module.scss';

/* eslint-disable-next-line */
export interface TextSplittingProps {}

export function TextSplitting(
  line: string,
  type: string,
  letterClass: string,
  containerClass: string
) {
  if (type === 'letter') {
    const sentence = [];
    let totalWord = 0,
      totalChars = 0;
    let word = new Array(0);
    for (let i = 0; i <= line.length; i++) {
      if (i === line.length) {
        sentence.push(word);
        totalWord++;
      } else if (line[i] === ' ') {
        sentence.push(word);
        word = new Array(0);
        totalWord++;
      } else {
        word.push(line[i]);
        totalChars++;
      }
    }

    // console.log(sentence);

    const css = {
      '--word-total': totalWord,
      '--char-total': totalChars,
    } as React.CSSProperties;
    return (
      <div
        className={`${styles.splitting} ${containerClass} ${styles.chars} ${styles.words}`}
        style={css}
      >
        {sentence.map((word, index) => {
          const css = { '--word-index': index } as React.CSSProperties;
          // console.log(word);
          return (
            <>
              <span key={index} className={styles.word} style={css}>
                {word.map((char: string, index: number) => {
                  const css = { '--char-index': index } as React.CSSProperties;
                  // console.log(char);
                  return (
                    <span
                      key={index}
                      className={`${styles.char} ${letterClass}`}
                      style={css}
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
              {/* <span className={styles.whitespace}>&nbsp;</span> */}
            </>
          );
        })}
        {/* {words.map((word) => {
          let chars = [];
          chars = word.split('');
          return (
            <>
              <span key={`--word-index:${}`} className={styles.word}  style={`--word-index:${}`}>
                {chars.map((char) => {
                  return (
                    <span
                      key={`--char-index:${}`}
                      className={`${styles.char} ${letterClass}` style={`--char-index:${}`}}
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
              <span className={styles.whitespace}>&nbsp;</span>
            </>
          );
        })} */}
      </div>
    );
  } else if (type === 'word') {
    return <div></div>;
  } else {
    return <div></div>;
  }
}

export default TextSplitting;
