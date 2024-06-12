import Facebook from '@/assets/icons/links/fb.svg';
import Inst from '@/assets/icons/links/inst.svg';
import Linkedin from '@/assets/icons/links/linkedin.svg';
import Twitter from '@/assets/icons/links/twitter.svg';

export const socialLinks = [
  { ref: 'https://www.facebook.com/ModsenSoftware/', component: <Facebook className="fb" /> },
  { ref: 'https://twitter.com/modsencompany', component: <Twitter className="twitter" /> },
  { ref: 'https://www.instagram.com/modsencompany/', component: <Inst className="inst" /> },
  { ref: 'https://www.linkedin.com/company/modsen/', component: <Linkedin className="linkedin" /> },
];
