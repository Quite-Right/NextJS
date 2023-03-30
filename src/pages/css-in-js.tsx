import styled from 'styled-components';

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
`

export default function CSSInJs() {
    return <Title>
        CSS IN JS
    </Title>
}