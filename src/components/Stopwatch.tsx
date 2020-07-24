import React, { HTMLProps, useEffect, useState } from 'react';
import styled from 'styled-components';
import SponsorCrossfade from './SponsorCrossfade';
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

const TimeDisplaySized = styled(TimeDisplay)`
    font-size: ${props => props.small ? '3vw' : '10vw'};
    color: rgba(255, 255, 255, 0.8);
`
const SponsorContentBlock = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 25vw;
    height: 10vw;
    color: #fff;
`

interface Props {
    small?: boolean;
};

interface State {
    currentTime: Date;
};

const contestStartTime = new Date('2020-07-25T05:00:00.000Z');
const contestEndTime = new Date('2020-07-25T08:00:00.000Z');
const openContestEndTime = new Date('2020-07-25T11:00:00.000Z');

const Stopwatch: React.FC<Props & HTMLProps<HTMLDivElement>> = (props: Props) => {
    const { small } = props;
    const [state, setState] = useState<State>({ currentTime: new Date() });

    useEffect(() => {
        setInterval(() => {
            setState((prevState: State) => ({ ...prevState, currentTime: new Date() }));
        }, 30);
    }, []);

    return (<>
        <Background />
        <Foreground {...props}>
            <CenterFlexbox>
                <div>
                    {
                        (contestStartTime >= state.currentTime) ?
                            <>
                                예선대회 시작까지<br />
                                <TimeDisplaySized value={+contestStartTime - +state.currentTime} small={small ?? false} />
                            </>
                            : (contestEndTime >= state.currentTime) ?
                                <>
                                    예선대회 종료까지<br />
                                    <TimeDisplaySized value={+contestEndTime - +state.currentTime} small={small ?? false} />
                                </>
                                : (openContestEndTime >= state.currentTime) ?
                                    <>
                                        예선 오픈 컨테스트 종료까지<br />
                                        <TimeDisplaySized value={+openContestEndTime - +state.currentTime} small={small ?? false} />
                                    </>
                                    : null
                    }
                </div>
            </CenterFlexbox>
        </Foreground>
        {props.small !== true ?
            <SponsorContentBlock>
                <SponsorCrossfade small />
            </SponsorContentBlock >
            : null
        }
    </>);
}

export default Stopwatch;