import React from 'react';
import styled from 'styled-components';
import Stopwatch from './Stopwatch';

// camera is 12:9, screen is 16:9
const ContentTopClock = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 25vw;
    height: ${56.25 / 8}vw;
`

const ContentTopMessage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 75vw;
    height: ${56.25 / 8}vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2d3243;
    color: #fff;
    font-weight: bold;
    font-size: 1.5em;
`

const ContentScoreboard = styled.iframe`
    position: absolute;
    bottom: 0;
    left: 0;
    height: ${56.25 / 8 * 7}vw;
    width: 100vw;
    border: none;
    background: #fff;
`

const ScoreboardScene = () => {
    return <>
        <ContentTopClock>
            <Stopwatch style={{ fontSize: '1.5vw' }} small />
        </ContentTopClock>
        <ContentTopMessage>
            scoreboard.ucpc.me
        </ContentTopMessage>
        <ContentScoreboard src="https://scoreboard.ucpc.me"/>
    </>;
}

export default ScoreboardScene;