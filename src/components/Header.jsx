import React from "react";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <Title>SAURABH GUPTA</Title>
      <Subtitle> Software Developer</Subtitle>
      <Subtitle>Please go through my profile links are in Navbar.</Subtitle>
      <TwoButtonsContainer>
        <Button>
          <Link to="/contact">Contact Us</Link>
        </Button>
        <Button>
          <Link to="/taskpage">Task Page</Link>
        </Button>
        <Button>{<ThemeToggle />}</Button>
      </TwoButtonsContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #ffbf00;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const TwoButtonsContainer = styled.div`
  justify-content: center;
  display: flex;
  gap: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
`;

export default Header;
