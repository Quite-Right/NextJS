import Link from "next/link";

const Home = () => <>
    <h1>Home page</h1>
    <Link href="./about">
        <div>
            About
        </div>
    </Link>
    <Link href="./product">
        <div>
            Product
        </div>
    </Link>
    <Link href="./docs">
        <div>
            Docs
        </div>
    </Link>
</>;

export default Home;