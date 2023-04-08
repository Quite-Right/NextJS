import styles from '@/styles/Blog.module.scss'
import { getSession } from 'next-auth/react';

interface IBlogProps {
    DB_USER: string;
    DB_PASSWORD: string;
    data: string;
}

const Blog = ({DB_USER, DB_PASSWORD, data}: IBlogProps) => <>
    <h1 className={styles.header}>Blog page</h1>
    <div>
        <span>
            DB_USER:
        </span>
        {DB_USER}
    </div>
    <div>
        <span>
            DB_PASSWORD:
        </span>
        {DB_PASSWORD}
    </div>
    <div>
        <span>
        NEXT_PUBLIC_DATA:
        </span>
        {process.env.NEXT_PUBLIC_DATA}
    </div>
    <div>
        DATA: {data}
    </div>
</>;

export async function getServerSideProps(context) {
    const {DB_USER, DB_PASSWORD} = process.env;
    const session = await getSession(context);
    console.log({session})
    if (!session) return {
        redirect: {
            destination: '/api/auth/signin?callbackUrl=/blog',
            permament: false
        }
    }
    return {
        props: {
            DB_USER,
            DB_PASSWORD,
            data: session ? 'List of personalized blogs' : 'Default blogs'
        }
    }
}

export default Blog;