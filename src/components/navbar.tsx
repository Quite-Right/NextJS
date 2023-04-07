import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
`

const routes = [
    {
        href: '/',
        text: 'Home'
    },
    {
        href: '/dashboard',
        text: 'Dashboard'
    },
    {
        href: '/blog',
        text: 'Blog'
    },
    {
        href: '/api/auth/sign-in',
        text: 'Sign in',
        onClick: signIn
    },
    {
        href: '/api/auth/sign-out',
        text: 'Sign out',
        onClick: signOut
    }
]



export default function Navbar() {
    
    return <Nav>
        {routes.map(({href, text, onClick}) => <Link onClick={onClick ? (e) => {
            e.preventDefault();
            onClick();
        }: onClick} key={text} href={href}>
            {text} 
        </Link>)}
    </Nav>
}