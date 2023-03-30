import Header from "@/components/header";
import Head from "next/head";

function About() {
    return <h1>About page</h1>;
};

About.getLayout = function PageLayout(page) {
    return <>
        <Head>
            <title>
                About page
            </title>
            <meta name='About page' content='This page is for about topic' />
            <link rel='icon' href='./favicon.ico' />
        </Head>
        <Header />
        {page}
    </>   
}

export default About;