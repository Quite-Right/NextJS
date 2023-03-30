import styled from 'styled-components';

const HeaderContainer = styled.h1`
    color: green;
    width: 100vw;
    height: 80px;
`;

export default function Header() {
    return <HeaderContainer>
        MY SITE HEADER
    </HeaderContainer>
}