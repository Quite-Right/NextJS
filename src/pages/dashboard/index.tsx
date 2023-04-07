import { useEffect, useState } from "react";
import styles from "@/styles/Dashboard.module.scss"
import { signIn, useSession } from "next-auth/react";

export default function Dashboard() {
    const {data: session, status} = useSession();
    console.log(status, session)
 const [request, setRequest] = useState<{
    data: null | Record<string, number>,
    fetching: boolean
 }>({
    data: null,
    fetching: true
 });

 const {data, fetching} = request;

 useEffect(() => {
    if (session) {
        (async () => {
            const res = await fetch("http://localhost:4000/dashboard")
            const data = await res.json();
            setRequest({data, fetching: false});
        })()
    }
 }, [session]);

 if (status === 'unauthenticated') signIn();
 if (fetching || status === 'loading') return <h1>Loading...</h1>
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