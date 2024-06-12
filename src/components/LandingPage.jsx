
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Services from './Services';
import Navbar from './Navbar';

const LandingPage = () => {
    return (
        <Container>
            <Navbar/>
            <Header />
            <Services />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export default LandingPage;
