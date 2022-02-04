import {  useQuery } from "@apollo/client";
import { usePosts } from "../hooks";
import {  GET_USERS } from "../Queries";
import {  GetUsersResponse } from "../types";
import { PostItem } from "./PostItem";

export const PostList: React.FC = () => {
    const { data, loading, error, refetch } = usePosts();
    const { data: usersResponse } = useQuery<GetUsersResponse>(GET_USERS);

    const onSelectUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedUser = event.target.value;

        if (selectedUser) {
            refetch({
                filter: {
                    user_id: Number(selectedUser)
                }
            });
        } else {
            // note that refetch is called with the last parameter that it was called the last time,
            // so to be save, we could call refetch with the proper parameter always
            refetch({
                filter: {}
            });
        }
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( {error.message}</p>;

    return (
        <section className="text-gray-600 body-font">
            <div className="px-5 flex justify-end">
                <select className="border p-3 rounded" onChange={onSelectUser}>
                    <option value="">Show all posts</option>
                    {usersResponse?.allUsers.map(item => <option key={item.id} value={item.id}>Only post created by {item.name}</option>)}
                </select>
            </div>
            <div className="container px-5 pt-10 pb-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {data?.allPosts.map(item => <PostItem key={item.id} post={item} />)}
                </div>
            </div>
        </section>
    )
}