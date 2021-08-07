import styles from './footer.module.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className="footer">
     <div className="footer__logo"></div> 
     <div className="footer__menu"></div>
     <div className="footer__cta"></div>
    </div>
  );
}

export default Footer;
