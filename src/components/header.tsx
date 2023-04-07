import styled from 'styled-components';
import Navbar from './navbar';

const HeaderContainer = styled.div`
    display: flex;
    background-color: green;
    width: 100vw;
    height: 80px;
`;

const Brand = styled.h1`
    margin-right: 20px;
`

export default function Header() {
    return <HeaderContainer>
        <Brand>Next</Brand>
        <Navbar />
    </HeaderContainer>
}