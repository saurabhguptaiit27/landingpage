import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

// Helper function to convert hex color to RGB
const hexToRgb = (hex) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}`
    : null;
};


// Light theme colors
const lightTheme = {
  background: "#f3f4f6",
  primary: "#000000",
  secondary: "#9ca3af",
  accent: "#059669",
  buttonHover: "rgba(5, 150, 105, 0.75)",
};

// Dark theme colors
const darkTheme = {
  background: "#1f2937",
  primary: "#FFFFFF",
  secondary: "#FFFF00",
  accent: "#4fd1c5",
  buttonHover: "rgba(79, 209, 197, 0.75)",
};

// Styled components for the header elements
const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme.serviceBackground};
  color: ${(props) => props.theme.textSecondary};
  margin: 0px 0px 80px 0px;
  max-width: 1280px;
  border-radius: 10px;
  padding: 0 16px;
`;

const FlexContainer = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    gap: 3rem;
  }
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.primary};
  text-decoration: none;
  gap: 15px;
  font-size: 0.75rem;
  margin-right:10px;
  @media (min-width: 850px) {
    font-size: 1.0rem;
  }
`;

const LogoImage = styled.img`
  height: 2.5rem;
  width: auto;
  padding-bottom: 0.5rem;
`;

const NavList = styled.ul`
  display: none;

  @media (min-width: 850px) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-size: 0.875rem;
    background-color: ${(props) => props.theme.serviceBackground};
    padding: 1rem;
    border-radius: 0.5rem;
  }

  li {
    list-style: none;
  }

  a {
    color: ${(props) => props.theme.secondary};
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${(props) => props.theme.buttonHover};
    }
  }
`;

const AuthSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 640px) {
    gap: 1.5rem;
  }

  a {
    display: inline-block;
    padding: 0.625rem 1.25rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    color: #ffffff; /* White text color */
  }

  .login {
    background-color: ${(props) => props.theme.secondary};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.buttonHover};
    }
  }

  .register {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${(props) => props.theme.buttonHover};
    }
  }

  .menu-button {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${(props) => props.theme.buttonHover};
    }
  }
`;

const MobileMenuButton = styled.button`
  display: block;
  background-color: ${(props) => props.theme.secondary};
  padding: 0.5rem;
  color: ${(props) => props.theme.primary};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.buttonHover};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Header = ({ themeMode }) => {
  const theme = themeMode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <FlexContainer>
          <LogoLink href="#">
            <LogoImage src="/home.png" alt="Logo" />
            <span className="sr-only">Home</span>
          </LogoLink>
          <NavList>
            <li>
              <a href="https://saurabhguptaportfolioreact.vercel.app/">
                Portfolio
              </a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/saurabh-gupta-4972362b5/">
                LinkedIn
              </a>
            </li>
          </NavList>
          <AuthSection>
            <a className="login" href="#">
              Login
            </a>
            <a className="register" href="#">
              Register
            </a>
            <MobileMenuButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </MobileMenuButton>
          </AuthSection>
        </FlexContainer>
      </HeaderContainer>
    </ThemeProvider>
  );
};

export default Header;
