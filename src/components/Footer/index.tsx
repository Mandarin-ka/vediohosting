import Flex from '../styled/Flex';
import { StyledA, StyledDocs, StyledFooter, StyledLicense, StyledLinks, StyledRefs } from './styled';
import { leftRefs, rightRefs } from '@/constants/footerLinks';
import { socialLinks } from '@/constants/socialLinks/socialLinks';

function Footer() {
  return (
    <StyledFooter data-testid="footer">
      <Flex jc="space-between" m={[0, 15, 0, 15]}>
        <StyledDocs>
          <StyledRefs>
            {leftRefs.map((e, i) => (
              <StyledA key={i} href={e.ref}>
                {e.text}
              </StyledA>
            ))}
          </StyledRefs>

          <StyledRefs>
            {rightRefs.map((e, i) => (
              <StyledA key={i} href={e.ref}>
                {e.text}
              </StyledA>
            ))}
          </StyledRefs>
        </StyledDocs>

        <StyledLinks>
          {socialLinks.map((e, i) => {
            return (
              <StyledA key={i} href={e.ref}>
                {e.component}
              </StyledA>
            );
          })}
        </StyledLinks>
        <StyledLicense>2024 Modsen company</StyledLicense>
      </Flex>
    </StyledFooter>
  );
}

export default Footer;
