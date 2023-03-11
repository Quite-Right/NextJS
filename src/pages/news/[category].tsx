import { GetServerSideProps } from "next"
import Link from "next/link"

interface INewsByCategoryProps {
    articles: any[];
    category: string;
}
const NewsByCategory = ({articles, category}: INewsByCategoryProps) => {
    return <>
        <h1>
            News by category: {category}
        </h1>
        {articles.map((article: any) => <Link key={article.id} href={`/news/${article.id}`}>
            {article.title}
        </Link>)}
    </>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {params} = context;
    const category = params?.category;
    console.log('getServerSideProps')
    const res = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await res.json();
    console.log({res,data})
    return {
        props: {
            articles: data,
            category
        }     
    }
}

export default NewsByCategory;