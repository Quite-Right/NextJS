import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
    const router = useRouter(); 
    const handleClick = () => {
        // router.replace('/product');
        router.push('/product');
    }
    return <>
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
    <button onClick={handleClick}>
        Place order
    </button>
    </>
}

export default Home;