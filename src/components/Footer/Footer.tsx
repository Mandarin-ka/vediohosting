import { leftRefs, rightRefs } from '@/constants/footerLinks';
import { socialLinks } from '@/constants/socialLinks/socialLinks';
import { useAppSelector } from '@/hooks/useAppSelector';

import styles from './Footer.module.scss';

function Footer() {
  const { theme } = useAppSelector((state) => state.ThemeReducer);

  return (
    <footer className={`${styles.footer} ${styles[theme]}`} data-testid="footer">
      <div className={styles.wrapper}>
        <div className={styles.docs}>
          <div className={styles.refs}>
            {leftRefs.map((e, i) => (
              <a key={i} href={e.ref} className={`${styles.ref} ${styles[theme]}`}>
                {e.text}
              </a>
            ))}
          </div>

          <div className={styles.refs}>
            {rightRefs.map((e, i) => (
              <a key={i} href={e.ref} className={`${styles.ref} ${styles[theme]}`}>
                {e.text}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.links}>
          {socialLinks.map((e, i) => {
            return (
              <a key={i} href={e.ref} className={styles.link}>
                {e.icon}
              </a>
            );
          })}
        </div>
        <p className={`${styles.license} ${styles[theme]}`}>2024 Modsen company</p>
      </div>
    </footer>
  );
}

export default Footer;
