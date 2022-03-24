import { FooterWrapper } from './styles';

export function Footer() {
  return (
    <FooterWrapper>
      <div className="container">
        <p>
          Developed by:{' '}
          <a
            href="https://www.linkedin.com/in/matheus97sm/"
            target="_blank"
            rel="noreferrer"
          >
            Matheus Fonseca.
          </a>
        </p>
      </div>
    </FooterWrapper>
  );
}
