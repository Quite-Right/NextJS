import Link from "next/link"

interface INewsProps {
    articles: any[]
}
const News = ({articles}: INewsProps) => {
    return <>
        <h1>
            News
        </h1>
        {articles.map((article: any) => <Link key={article.id} href={`/news/${article.id}`}>
            {article.title}
        </Link>)}
    </>
}

export const getServerSideProps = async () => {
    console.log('getServerSideProps')
    const res = await fetch('http://localhost:4000/news');
    const data = await res.json();
    console.log({res,data})
    return {
        props: {
            articles: data
        }     
    }
}

export default News;