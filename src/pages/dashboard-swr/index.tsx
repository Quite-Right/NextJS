import { useEffect, useState } from "react";
import useSWR from 'swr';

const dashboardFetcher = async () => {
    const res = await fetch("http://localhost:4000/dashboard")
    const data = await res.json();
    return data;
}

export default function DashboardSWR() {
    const {data, error} = useSWR('dashboard', dashboardFetcher)
    if (error) return <h1>Error</h1>
    if (!data) return <h1>Loading...</h1>
    return <>
        <h1>
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