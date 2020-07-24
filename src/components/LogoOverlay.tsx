import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
    position: absolute;
    z-index: 100000;
    left: 2vw;
    top: 2vw;
    height: 3.5vw;
`

const LogoOverlay = () => {
    return <Logo src="/logo.png" />;
}

export default LogoOverlay;