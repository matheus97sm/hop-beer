import Logo from 'images/logo.png';

import { HeaderWrapper } from './styles';

export function Header() {
  return (
    <HeaderWrapper>
      <div>
        <img src={Logo} alt="Brand Hop Beer" />
      </div>
    </HeaderWrapper>
  );
}
