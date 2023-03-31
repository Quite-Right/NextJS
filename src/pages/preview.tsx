import User from "@/components/user";
import { GetStaticProps } from "next";

interface IPreviewPageProps {
    preview: string;
}

function PreviewPage({
    preview
}: IPreviewPageProps) {
    return <>
    <h1>
        Preview page
    </h1>
    <p>
        {preview}
    </p>
    </>
}

export const getStaticProps: GetStaticProps = async (context) => {
    console.log(context.previewData)
    return {
        props: {
            preview: `Preview mode ${context.preview ? 'on' : 'off'}` 
        }
    }
}

export default PreviewPage;