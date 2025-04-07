import React from 'react';
import styled from 'styled-components';
import { useParallax } from '../hooks/useParallax';

interface ParallaxProps {
  offset: number;
}

const AboutSection = styled.section<ParallaxProps>`
  padding: 4rem 2rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(${props => props.offset * 0.2}px);
  position: relative;
  z-index: 1;
`;

const Title = styled.h2<ParallaxProps>`
  font-family: "Roboto Slab", serif;
  font-size: 3rem;
  color: #333;
  margin-bottom: 3rem;
  text-align: center;
  transform: translateY(${props => props.offset * -0.3}px);
`;

const Content = styled.div<ParallaxProps>`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  transform: translateY(${props => props.offset * -0.1}px);
`;

const Description = styled.p`
  font-family: "Roboto Slab", serif;
  font-size: 1.2rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 1.5rem;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Skill = styled.span`
  background: transparent;
  color: #333;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-family: "Roboto Slab", serif;
  font-size: 1rem;
  position: relative;
  isolation: isolate;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50px;
    padding: 2px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50px;
    background: linear-gradient(45deg, #ff6b6b20, #4ecdc420);
    z-index: -2;
  }
`;

const AboutMe = () => {
  const offset = useParallax(0.5);

  return (
    <AboutSection id="about" offset={offset}>
      <Title offset={offset}>About Me</Title>
      <Content offset={offset}>
        <Description>
          I'm a passionate web designer with a keen eye for detail and a love for creating beautiful, 
          functional websites. With expertise in modern web technologies and design principles, 
          I bring creative ideas to life through clean code and intuitive user experiences.
        </Description>
        <Description>
          My approach combines aesthetic sensibility with technical proficiency, 
          ensuring that each project not only looks stunning but also performs flawlessly.
        </Description>
        <Skills>
          <Skill>Web Design</Skill>
          <Skill>UI/UX</Skill>
          <Skill>React</Skill>
          <Skill>Responsive Design</Skill>
          <Skill>Creative Direction</Skill>
        </Skills>
      </Content>
    </AboutSection>
  );
};

export default AboutMe; 