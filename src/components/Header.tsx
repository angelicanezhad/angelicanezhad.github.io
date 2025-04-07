import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const paintWash = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const blurToSharp = keyframes`
  from {
    opacity: 0;
    filter: blur(20px);
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.3);
  }
`;

const HeaderContainer = styled.div<{ scrolled: number }>`
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 30px 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1),
              0 20px 60px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  transform: translateY(${props => -props.scrolled * 0.2}px);
`;

const FairyLight = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  pointer-events: none;
  box-shadow: 
    0 0 15px rgba(255, 255, 255, 0.8),
    0 0 30px rgba(255, 255, 255, 0.4),
    0 0 45px rgba(255, 255, 255, 0.2);
  animation: ${fadeOut} 1s ease-out forwards;
  z-index: 3;
`;

const PaintOverlay = styled.div<{ scrolled: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  opacity: ${props => Math.max(0.3, 1 - props.scrolled * 0.002)};
  animation: ${paintWash} 1s ease-out forwards;
  z-index: 1;
  transition: opacity 0.3s ease;
  border-radius: 0 0 30px 30px;
`;

const ContentWrapper = styled.div<{ scrolled: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateY(${props => props.scrolled * 0.1}px);
  z-index: 2;
  width: 100%;
  max-width: 800px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s ease-out;
  perspective: 1000px;
`;

const Title = styled.h1<{ scrolled: number }>`
  font-size: 4rem;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: ${blurToSharp} 1.5s ease forwards 1s;
  background: linear-gradient(45deg, #fff, #eee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  transform: translateZ(${props => props.scrolled * 0.2}px);
  transition: transform 0.1s ease-out;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled.p<{ scrolled: number }>`
  font-size: 1.8rem;
  font-weight: 300;
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  opacity: 0;
  animation: ${blurToSharp} 1.5s ease forwards 1.5s;
  color: white;
  text-align: center;
  width: 100%;
  max-width: 600px;
  line-height: 1.4;
  transform: translateZ(${props => props.scrolled * 0.1}px);
  transition: transform 0.1s ease-out;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

interface FairyLightPoint {
  id: number;
  x: number;
  y: number;
}

function Header() {
  const [scrolled, setScrolled] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [fairyLights, setFairyLights] = useState<FairyLightPoint[]>([]);
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!containerRef) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });

      // Add new fairy light
      const newLight = {
        id: Date.now(),
        x,
        y
      };

      setFairyLights(prev => [...prev, newLight]);

      // Remove fairy light after animation
      setTimeout(() => {
        setFairyLights(prev => prev.filter(light => light.id !== newLight.id));
      }, 1000);
    };

    containerRef.addEventListener('mousemove', handleMouseMove);
    return () => containerRef.removeEventListener('mousemove', handleMouseMove);
  }, [containerRef]);

  return (
    <HeaderContainer 
      scrolled={scrolled} 
      ref={setContainerRef}
    >
      <PaintOverlay scrolled={scrolled} />
      {fairyLights.map(light => (
        <FairyLight
          key={light.id}
          x={light.x}
          y={light.y}
        />
      ))}
      <ContentWrapper scrolled={scrolled}>
        <Title scrolled={scrolled}>Hi! I'm Angelica</Title>
        <Subtitle scrolled={scrolled}>Let's create some cool websites together!</Subtitle>
      </ContentWrapper>
    </HeaderContainer>
  );
}

export default Header; 