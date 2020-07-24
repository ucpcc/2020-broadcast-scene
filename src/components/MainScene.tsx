import React from 'react';
import styled from 'styled-components';
import SponsorCrossfade from './SponsorCrossfade';
import Stopwatch from './Stopwatch';

// camera is 12:9, screen is 16:9
const ContentsContainer = styled.div`
    position: absolute;
    right: 0;
    top: ${75 / 4}vw;
    bottom: 0;
    width: 25vw;
    z-index: 1;
    background: #fff;
`

const ContentBlock = styled.div`
    position: relative;
    width: 25vw;
    height: ${75 / 4}vw;
`

const MainScene = () => {
    return <>
        <ContentsContainer>
            <ContentBlock>
                <Stopwatch style={{ fontSize: '1.5vw' }} small />
            </ContentBlock>
            <ContentBlock>
                <SponsorCrossfade />
            </ContentBlock>
        </ContentsContainer>
    </>;
}

export default MainScene;