import styles from './custom-cursor.module.scss';
import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ReactComponent as Cursor } from '../../../assets/components/3d/Cursor.svg';

/* eslint-disable-next-line */
export interface CustomCursorProps {}

export function CustomCursor(props: CustomCursorProps) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [hovering, setHovering] = React.useState(false);
  // const [cursorXY, setCursorXY] = React.useState({ x: -100, y: -100 });
  React.useEffect(() => {
    const followMouse = (e: any) => {
      // const x: number = e.clientX + 16;
      // const y: number = e.clientY + 16;
      // setCursorXY({ x, y });
      const typeOfCursor = e.target.style.cursor;

      if (typeOfCursor === 'pointer') setHovering(true);
      else setHovering(false);

      cursorX.set(e.clientX + 16);
      cursorY.set(e.clientY + 16);
    };
    window.addEventListener('mousemove', followMouse);
    return () => {
      window.removeEventListener('mousemove', followMouse);
    };
  }, []);
  return (
    <motion.div
      className={styles.secondary_cursor}
      // style={{ transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)` }}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
      <Cursor />
    </motion.div>
  );
}

export default CustomCursor;
