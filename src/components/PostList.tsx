import { usePosts } from "../hooks";
import { PostItem } from "./PostItem";

export const PostList: React.FC = () => {
    const { data, loading, error } = usePosts();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( {error.message}</p>;

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {data?.allPosts.map(item => <PostItem key={item.id} post={item} />)}
                </div>
            </div>
        </section>
    )
}