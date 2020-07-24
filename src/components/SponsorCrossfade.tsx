import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Background = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
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

const LeftFlexbox = styled.div`
    position: absolute;
    left: 2vw;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: left;
`

const SponsorLogo = styled.img`
    width: 16vw;
`

const SponsorLogoSmall = styled.img`
    width: 12vw;
`

const SponsorName = styled.span`
    font-size: 1.2vw;
    text-align: center;
`

const LeftTopText = styled.span`
    position: absolute;
    left: 1vw;
    top: 1vw;
    font-size: 1.5vw;
    font-weight: 600;
`

interface Sponsor {
    name: string;
    src?: string;
    type: 'image' | 'text';
}

const sponsors: Sponsor[] = [
    { name: '전국 대학생 프로그래밍 대회 동아리 연합', type: 'text' },
    { name: '고려대학교 SW중심대학 사업단', type: 'text' },
    { name: '스타트링크', src: 'startlink.png', type: 'image' },
    { name: '네이버 D2', src: 'naverd2.png', type: 'image' },
    { name: '마인즈랩', src: 'minds-lab.png', type: 'image' },
    { name: '알고스팟', src: 'algospot.png', type: 'image' },
    { name: '케니소프트', src: 'kennysoft.png', type: 'image' },
    { name: 'solved.ac', src: 'solvedac-black.svg', type: 'image' },
    { name: '개앞맵시', type: 'text' },
];

interface Props {
    small?: boolean;
}

interface State {
    index: number;
};

const SponsorCrossfade: React.FC<Props> = (props: Props) => {
    const { small } = props;
    const [state, setState] = useState<State>({ index: 0 });

    useEffect(() => {
        setInterval(() => {
            setState((prevState: State) => ({ ...prevState, index: (prevState.index + 1) % sponsors.length }));
        }, 5000);
    }, []);

    return <>
        <Background />
        {
            small !== true ?
                <>
                    <LeftTopText>스폰서</LeftTopText>
                    <CenterFlexbox>
                        {
                            sponsors[state.index].type === 'image' ?
                                <SponsorLogo src={`/sponsors/${sponsors[state.index].src}`} />
                                : <SponsorName>{sponsors[state.index].name}</SponsorName>
                        }
                    </CenterFlexbox>
                </>
                :
                <>
                    <LeftFlexbox>
                        {
                            sponsors[state.index].type === 'image' ?
                                <SponsorLogoSmall src={`/sponsors/${sponsors[state.index].src}`} />
                                : <SponsorName>{sponsors[state.index].name}</SponsorName>
                        }
                    </LeftFlexbox>
                </>
        }

    </>;
}

export default SponsorCrossfade;