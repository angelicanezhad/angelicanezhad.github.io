import React from 'react';
import styled from 'styled-components';
import { useParallax } from '../hooks/useParallax';

interface ParallaxProps {
  offset: number;
}

const ProjectsSection = styled.section<ParallaxProps>`
  padding: 2rem;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(${props => props.offset * 0.2}px);
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-family: "Roboto Slab", serif;
  font-size: 3rem;
  color: #333;
  margin: 2rem 0 8rem;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const ProjectsGrid = styled.div<ParallaxProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  transform: translateY(${props => props.offset * -0.1}px);
  position: relative;
  z-index: 1;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  position: relative;
  overflow: hidden;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-family: "Roboto Slab", serif;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-family: "Roboto Slab", serif;
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ProjectTag = styled.span`
  background: transparent;
  color: #333;
  padding: 0.3rem 1.2rem;
  border-radius: 50px;
  font-family: "Roboto Slab", serif;
  font-size: 0.9rem;
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

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Projects = () => {
  const offset = useParallax(0.5);

  const projects = [
    {
      title: "Project One",
      description: "A modern web application built with React and TypeScript.",
      tags: ["React", "TypeScript", "Styled Components"],
      imageUrl: "/project1.jpg"
    },
    {
      title: "Project Two",
      description: "An innovative mobile-first design with seamless user experience.",
      tags: ["UI/UX", "Mobile", "Design"],
      imageUrl: "/project2.jpg"
    },
    {
      title: "Project Three",
      description: "A responsive website with modern animations and interactions.",
      tags: ["Web Design", "Animation", "CSS"],
      imageUrl: "/project3.jpg"
    }
  ];

  return (
    <ProjectsSection id="projects" offset={offset}>
      <Title>My Recent Projects</Title>
      <ProjectsGrid offset={offset}>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage>
              <StyledImage src={project.imageUrl} alt={project.title} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTags>
                {project.tags.map((tag, tagIndex) => (
                  <ProjectTag key={tagIndex}>{tag}</ProjectTag>
                ))}
              </ProjectTags>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects; 