import { LogoName, LogoWrapper, Triangle } from './styled';
import Flex from '@/components/StyledComponents/Flex';

function Logo() {
  return (
    <Flex ai="center" m={0}>
      <LogoWrapper data-testid="logo">
        <Triangle />
      </LogoWrapper>

      <LogoName>ModsenFilms</LogoName>
    </Flex>
  );
}

export default Logo;
