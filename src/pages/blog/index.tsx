import styles from '@/styles/Blog.module.scss'

interface IBlogProps {
    DB_USER: string;
    DB_PASSWORD: string;
}

const Blog = ({DB_USER, DB_PASSWORD}: IBlogProps) => <>
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
</>;

export const getServerSideProps = () => {
    const {DB_USER, DB_PASSWORD} = process.env;
    console.log(process.env)
    return {
        props: {
            DB_USER,
            DB_PASSWORD
        }
    }
}

export default Blog;