import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1.5rem;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-family: "Roboto Slab", serif;
  font-size: 1.1rem;
  font-weight: 400;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    transition: width 0.3s ease;
  }

  &:hover {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    &:after {
      width: 100%;
    }
  }
`;

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 60;
      const elementTop = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => scrollToSection('about')}>About Me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => scrollToSection('contact')}>Contact Me</NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navigation; 