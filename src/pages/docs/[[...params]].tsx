import { useRouter } from "next/router";

const Doc = () => {
    const router = useRouter();
    const {params} = router.query;
    return <>
        <h1>Doc page</h1>
        <h2>Params: {JSON.stringify(params)}</h2>
    </>
}

export default Doc;