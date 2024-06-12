
import React from 'react';
import styled from 'styled-components';

const Services = () => {
    return (
        <ServicesContainer>
            <Service>
                <Icon>🏢</Icon>
                <Title>Local Business</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
            </Service>
            <Service>
                <Icon>🛒</Icon>
                <Title>Online Store</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
            </Service>
            <Service>
                <Icon>✍️</Icon>
                <Title>Blogging</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
            </Service>
            <Service>
                <Icon>🖼️</Icon>
                <Title>Portfolio</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
            </Service>
        </ServicesContainer>
    );
};

const ServicesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`;

const Service = styled.div`
    text-align: center;
    padding: 20px;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    background-color: ${(props) => props.theme.serviceBackground};
`;

const Icon = styled.div`
    font-size: 2rem;
    margin-bottom: 10px;
`;

const Title = styled.h3`
    font-size: 1.25rem;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 1rem;
    color: ${(props) => props.theme.textSecondary};
`;

export default Services;
