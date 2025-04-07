/// <reference types="react" />

import React from 'react';
import styled from 'styled-components';
import { useParallax } from '../hooks/useParallax';

interface ParallaxProps {
  offset: number;
}

const ContactSection = styled.section<ParallaxProps>`
  min-height: calc(100vh - 60px);
  padding: 4rem 2rem;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(${props => props.offset * 0.2}px);
  position: relative;
  z-index: 1;
  scroll-margin-top: 80px;
  scroll-snap-align: start;
`;

const Title = styled.h2`
  font-family: "Roboto Slab", serif;
  font-size: 3rem;
  color: #333;
  margin-bottom: 8rem;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const ContactForm = styled.form<ParallaxProps>`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  transform: translateY(${props => props.offset * -0.1}px);
  position: relative;
  z-index: 1;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  display: block;
  font-family: "Roboto Slab", serif;
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-family: "Roboto Slab", serif;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4ecdc4;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  font-family: "Roboto Slab", serif;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4ecdc4;
  }
`;

const SubmitButton = styled.button`
  background: transparent;
  color: #333;
  font-family: "Roboto Slab", serif;
  font-size: 1.1rem;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
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
    transition: opacity 0.3s ease;
    opacity: 0.5;
    z-index: -2;
  }

  &:hover {
    transform: translateY(-2px);
    
    &::after {
      opacity: 1;
    }
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
`;

const ContactMe = (): React.ReactElement => {
  const offset = useParallax(0.5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <ContactSection id="contact" offset={offset}>
      <Title>Contact Me</Title>
      <FormContainer>
        <ContactForm onSubmit={handleSubmit} offset={offset}>
          <FormGroup>
            <Label>Name</Label>
            <Input type="text" required />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" required />
          </FormGroup>
          <FormGroup>
            <Label>Message</Label>
            <TextArea required />
          </FormGroup>
          <FormGroup>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </FormGroup>
        </ContactForm>
      </FormContainer>
    </ContactSection>
  );
};

export default ContactMe; 