import Facebook from '@/assets/icons/links/fb.svg';
import Inst from '@/assets/icons/links/inst.svg';
import Linkedin from '@/assets/icons/links/linkedin.svg';
import Twitter from '@/assets/icons/links/twitter.svg';

import styles from './socialLinks.module.scss';

export const socialLinks = [
  { ref: 'https://www.facebook.com/ModsenSoftware/', name: 'facebook', icon: <Facebook className={`${styles.img} ${styles.fb}`} /> },
  { ref: 'https://twitter.com/modsencompany', name: 'twitter', icon: <Twitter className={`${styles.img} ${styles.twitter}`} /> },
  { ref: 'https://www.instagram.com/modsencompany/', name: 'inst', icon: <Inst className={`${styles.img} ${styles.inst}`} /> },
  { ref: 'https://www.linkedin.com/company/modsen/', name: 'linkedin', icon: <Linkedin className={`${styles.img} ${styles.linkedin}`} /> },
];
