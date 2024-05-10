import inst from '@/assets/images/inst.png';
import facebook from '@/assets/images/fb.png';
import twitter from '@/assets/images/twitter.png';
import linkedin from '@/assets/images/in.png';
import { links } from './links';

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
          <a href={links.facebook} className='link'>
            <img src={facebook} alt='' className='img' />
          </a>
          <a href={links.twitter} className='link'>
            <img src={twitter} alt='' className='img' />
          </a>
          <a href={links.inst} className='link'>
            <img src={inst} alt='' className='img' />
          </a>
          <a href={links.linkedin} className='link'>
            <img src={linkedin} alt='' className='img' />
          </a>
        </div>
        <p className={styles.license}>2023 Modsen company</p>
      </div>
    </footer>
  );
}

export default Footer;
