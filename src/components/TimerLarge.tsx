import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TimeDisplay from './TimeDisplay';

const Background = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #ff9900;
`

const Foreground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    color: #fff;
`

const CenterFlexbox = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const TimeDisplayLarge = styled(TimeDisplay)`
    font-size: 10vw;
    color: rgba(255, 255, 255, 0.8);
`

interface State {
    currentTime: Date
};

const contestStartTime = new Date('2020-07-25T05:00:00.000Z');
const contestEndTime = new Date('2020-07-25T08:00:00.000Z');
const openContestEndTime = new Date('2020-07-25T11:00:00.000Z');

const TimerLarge = () => {
    const [state, setState] = useState<State>({ currentTime: new Date() });

    useEffect(() => {
        setInterval(() => {
            setState((prevState: State) => ({ ...prevState, currentTime: new Date() }));
        }, 30);
    }, [state.currentTime]);

    return (<>
        <Background />
        <Foreground>
            <CenterFlexbox>
                <div>
                    {
                        (contestStartTime >= state.currentTime) ?
                            <>
                                대회 시작까지<br />
                                <TimeDisplayLarge value={+contestStartTime - +state.currentTime} />
                            </>
                            : (contestEndTime >= state.currentTime) ?
                                <>
                                    대회 종료까지<br />
                                    <TimeDisplayLarge value={+contestEndTime - +state.currentTime} />
                                </>
                                : (openContestEndTime >= state.currentTime) ?
                                    <>
                                        오픈 컨테스트 종료까지<br />
                                        <TimeDisplayLarge value={+openContestEndTime - +state.currentTime} />
                                    </>
                                    : null
                    }
                </div>
            </CenterFlexbox>
        </Foreground>
    </>);
}

export default TimerLarge;