import { useState } from 'react';

import { GlobalStyle } from './globalStyles';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Footer />
    </>
  );
}
