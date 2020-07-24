import React, { HTMLProps } from 'react';
import styled from 'styled-components';

const Digits = styled.span`
    display: inline;
    font-weight: 600;
    color: #fff;
`

const SmallDigits = styled(Digits)`
    font-size: .8em;
`

interface Props {
    value: number
}

const TimeDisplay: React.FC<Props & HTMLProps<HTMLDivElement>> = (props: Props) => {
    const { value } = props;
    const days = Math.floor(value / 1000 / 60 / 60 / 24);
    const hours = (Math.floor(value / 1000 / 60 / 60) % 24).toString().padStart(2, '0');
    const minutes = (Math.floor(value / 1000 / 60) % 60).toString().padStart(2, '0');
    const seconds = (Math.floor(value / 1000) % 60).toString().padStart(2, '0');
    const milliseconds = (value % 1000).toString().padStart(3, '0');

    return <div {...props}>
        {days !== 0 ? <>{days}일</> : null}
        <Digits>{hours}</Digits>
        :
        <Digits>{minutes}</Digits>
        :
        <Digits>{seconds}</Digits>
        .
        <SmallDigits>{milliseconds}</SmallDigits>
    </div>;
}

export default TimeDisplay;