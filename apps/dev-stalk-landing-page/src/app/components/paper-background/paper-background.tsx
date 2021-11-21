import styles from './paper-background.module.scss';

/* eslint-disable-next-line */
export interface PaperBackgroundProps {}

export function PaperBackground(props: PaperBackgroundProps) {
  return <div className={styles.paper__background}></div>;
}

export default PaperBackground;
