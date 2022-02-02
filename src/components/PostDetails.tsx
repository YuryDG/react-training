import { useParams } from "react-router-dom";

export const PostDetails: React.FC = (props) => {
    const params = useParams<{ postId: string }>();

    return (
        <div>
            <h2>PostDetails works! {params.postId}</h2>
        </div>
    )
}