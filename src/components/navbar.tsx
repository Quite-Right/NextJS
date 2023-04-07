import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
`





export default function Navbar() {
    const {data: session} = useSession();
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
            onClick: signIn,
            hidden: session
        },
        {
            href: '/api/auth/sign-out',
            text: 'Sign out',
            onClick: signOut,
            hidden: !session
        }
    ]
    return <Nav>
        {routes.map(({href, text, onClick, hidden}) => hidden ? null : <Link onClick={onClick ? (e) => {
            e.preventDefault();
            onClick();
        }: onClick} key={text} href={href}>
            {text} 
        </Link>)}
    </Nav>
}