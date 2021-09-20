import React from 'react';
import ReactDom, { render } from 'react-dom';
import styles from './portal-modal.module.scss';

/* eslint-disable-next-line */
export interface PortalModalProps {
  open: boolean;
  children: JSX.Element;
  onClose: () => void;
}

export function PortalModal(props: PortalModalProps) {
  if (!props.open) return null;
  else {
    const portal: HTMLDivElement = document.getElementById(
      'portal'
    ) as HTMLDivElement;
    return ReactDom.createPortal(
      <>
        <div className={styles.overlay} onClick={props.onClose}></div>
        <div className={styles.modal}>{props.children}</div>
      </>,
      portal
    );
  }
}

export default PortalModal;
