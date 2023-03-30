import { useEffect, useState } from "react";
import styles from "../../styles/Dashboard.module.scss"

export default function Dashboard() {
 const [request, setRequest] = useState<{
    data: null | Record<string, number>,
    fetching: boolean
 }>({
    data: null,
    fetching: true
 });

 const {data, fetching} = request;

 useEffect(() => {
    (async () => {
        const res = await fetch("http://localhost:4000/dashboard")
        const data = await res.json();
        setRequest({data, fetching: false});
    })()
 }, []);

 if (fetching) return <h1>Loading...</h1>
 return <>
    <h1 className={styles.header}>
        Dashboard
    </h1>
    <div>
        posts: {data.posts}
    </div>
    <div>
        posts: {data.likes}
    </div>
    <div>
        posts: {data.followers}
    </div>
    <div>
        posts: {data.following}
    </div>
 </>
}