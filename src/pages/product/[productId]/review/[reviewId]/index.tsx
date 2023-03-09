import { useRouter } from "next/router";

const ProductDetail = () => {
    const router = useRouter();
    const {productId, reviewId} = router.query;

    return <>
        <h1>
            Details about product {productId}
        </h1>
        <h2>
            ReviewId: {reviewId}
        </h2>
    </>
}
export default ProductDetail;