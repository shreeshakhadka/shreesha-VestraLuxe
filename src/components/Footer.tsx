import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: underline;

  &:hover {
    color: #999;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2023 Your Company. All rights reserved. | 
        <FooterLink href="#">Privacy Policy</FooterLink> | 
        <FooterLink href="#">Terms of Service</FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
