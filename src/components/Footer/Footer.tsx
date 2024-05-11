import { links } from './links';
import Facebook from '@/assets/icons/links/fb.svg';
import Inst from '@/assets/icons/links/inst.svg';
import Linkedin from '@/assets/icons/links/linkedin.svg';
import Twitter from '@/assets/icons/links/twitter.svg';

import * as styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.docs}>
          <div className={styles.refs}>
            <a href='' className={styles.ref}>
              Terms Privacy Policy & Safety
            </a>
            <a href='' className={styles.ref}>
              How YouTube works
            </a>
            <a href='' className={styles.ref}>
              Test new features
            </a>
          </div>
          <div className={styles.refs}>
            <a href='' className={styles.ref}>
              About
            </a>
            <a href='' className={styles.ref}>
              Press
            </a>
            <a href='' className={styles.ref}>
              Copyright
            </a>
            <a href='' className={styles.ref}>
              Contact us
            </a>
            <a href='' className={styles.ref}>
              Creators
            </a>
            <a href='' className={styles.ref}>
              Advertise
            </a>
            <a href='' className={styles.ref}>
              Developers
            </a>
          </div>
        </div>
        <div className={styles.links}>
          <a href={links.facebook} className={styles.link}>
            {<Facebook className={`${styles.img} ${styles.fb}`} />}
          </a>
          <a href={links.twitter} className={styles.link}>
            {<Twitter className={`${styles.img} ${styles.twitter}`} />}
          </a>
          <a href={links.inst} className={styles.link}>
            {<Inst className={`${styles.img} ${styles.inst}`} />}
          </a>
          <a href={links.linkedin} className={styles.link}>
            {<Linkedin className={`${styles.img} ${styles.linkedin}`} />}
          </a>
        </div>
        <p className={styles.license}>2023 Modsen company</p>
      </div>
    </footer>
  );
}

export default Footer;
