import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Header />
      <AboutMe />
      <ContactMe />
    </>
  );
}

export default App; 