import { Dashboard } from 'components/Dashboard';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

import { GlobalStyle } from 'globalStyles';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
      <Footer />
    </>
  );
}
