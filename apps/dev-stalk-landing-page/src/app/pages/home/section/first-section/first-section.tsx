import styles from './first-section.module.scss';
import CtaButton from '../../../../components/cta-button/cta-button';

import Instagram from '../../../../../assets/social-media-components/instagram.png';
import Twitter from '../../../../../assets/social-media-components/twitter.png';
import LinkedIn from '../../../../../assets/social-media-components/linkedin.png';
import ArtImage from '../../../../../assets/logo/Icon-Embossed.png';

/* eslint-disable-next-line */
export interface FirstSectionProps {}

export function FirstSection(props: FirstSectionProps) {
  return (
    <div className={styles.firstSection}>
      <div className={styles.firstSection__content}>
        <div className={styles.firstSection__content__wrapper}>
          <h1>
            Tired of missing opportunities, don't know how to network and are
            still stuck with creating your developer profile?
          </h1>
          <h2>Let people discover you instead!</h2>
          <h3>
            Create your developer identity, signup now and get early access.
          </h3>
          <CtaButton isMobile={true} />
          <div className={styles.firstSection__socials}>
            <div className="social">
              <div className="social-shadow"></div>
              <a
                href="https://www.instagram.com/devstalk_in/"
                className="social-wrapper"
              >
                <img src={Instagram} alt="Instagram"></img>
              </a>
            </div>
            <div className="social">
              <div className="social-shadow"></div>
              <a
                href="https://www.linkedin.com/company/devstalk"
                className="social-wrapper"
              >
                <img src={LinkedIn} alt="LinkedIn"></img>
              </a>
            </div>
            {/* <div className="social">
              <div className="social-shadow"></div>
              <a href="#" className="social-wrapper">
                <img src={Youtube} alt="Youtube"></img>
              </a>
            </div> */}
            <div className="social">
              <div className="social-shadow"></div>
              <a
                href="https://www.twitter.com/devStalk_in"
                className="social-wrapper"
              >
                <img src={Twitter} alt="Twitter"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.firstSection__art}>
        <img src={ArtImage} alt="Art"></img>
        {/* <Art /> */}
      </div>
    </div>
  );
}

export default FirstSection;
