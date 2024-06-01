import { links } from './links';
import Facebook from '@/assets/icons/links/fb.svg';
import Inst from '@/assets/icons/links/inst.svg';
import Linkedin from '@/assets/icons/links/linkedin.svg';
import Twitter from '@/assets/icons/links/twitter.svg';
import { useAppSelector } from '@/hooks/redux/useAppSelector';

import styles from './Footer.module.scss';

function Footer() {
  const { theme } = useAppSelector((state) => state.ThemeReducer);

  return (
    <footer
      className={`${styles.footer} ${styles[theme]}`}
      data-testid='footer'
    >
      <div className={styles.wrapper}>
        <div className={styles.docs}>
          <div className={styles.refs}>
            <a href='' className={`${styles.ref} ${styles[theme]}`}>
              Terms Privacy Policy & Safety
            </a>
            <a href='' className={`${styles.ref} ${styles[theme]}`}>
              How YouTube works
            </a>
            <a href='' className={`${styles.ref} ${styles[theme]}`}>
              Test new features
            </a>
          </div>
          <div className={styles.refs}>
            <a href='' className={`${styles.ref} ${styles[theme]}`}>
              About
            </a>
            <a href='' className={`${styles.ref} ${styles[theme]}`}>
              Press
            </a>
            <a href='' className={`${styles.ref} ${styles[theme]}`}>
              Copyright
            </a>
            <a href='' className={`${styles.ref} ${styles[theme]}`}>
              Contact us
            </a>
            <a href='' className={`${styles.ref} ${styles[theme]}`}>
              Creators
            </a>
            <a href='' className={`${styles.ref} ${styles[theme]}`}>
              Advertise
            </a>
            <a href='' className={`${styles.ref} ${styles[theme]}`}>
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
        <p className={`${styles.license} ${styles[theme]}`}>
          2024 Modsen company
        </p>
      </div>
    </footer>
  );
}

export default Footer;
