import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2f2f2;
`;

function Footer() {
    return (
        <FooterWrapper>
            <span>Copyright © Michelle Chen 2021</span>
        </FooterWrapper>
    );
}

export default Footer;
