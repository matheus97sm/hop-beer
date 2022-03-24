import Logo from 'images/logo.png';
import Instagram from 'images/instagram.svg';
import Linkedin from 'images/linkedin.svg';

import { HeaderWrapper, HeaderMidias } from './styles';

export function Header() {
  return (
    <HeaderWrapper>
      <div className="container">
        <img src={Logo} alt="Brand Hop Beer" />

        <HeaderMidias>
          <a
            href="https://instagram.com/matheus97sm"
            target="_blank"
            title="Go to Instagram"
            rel="noreferrer"
          >
            <img src={Instagram} alt="Instagram Matheus Fonseca" />
          </a>

          <a
            href="https://www.linkedin.com/in/matheus97sm/"
            target="_blank"
            title="Go to Linkedin"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="Linkedin Matheus Fonseca" />
          </a>
        </HeaderMidias>
      </div>
    </HeaderWrapper>
  );
}
