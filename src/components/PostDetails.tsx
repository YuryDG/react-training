import { useQuery } from "@apollo/client";
import { AiOutlineComment, AiOutlineEye } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useUpdatePostViews } from "../hooks";
import { GET_POST } from "../Queries";
import { GetPostParams, GetPostResponse } from "../types";

export const PostDetails: React.FC = () => {
    const params = useParams<{ postId: string }>();
    const postId = String(params.postId);
    const { updatePost } = useUpdatePostViews();
    const { data } = useQuery<GetPostResponse, GetPostParams>(GET_POST, {
        variables: { postId },
        onCompleted: (info) => {
            // updatePost({
            //     variables: {
            //         updatePostId: postId,
            //         views: info.Post.views + 1
            //     }
            // });
        },
        onError: (error) => {
            console.log({ error })
        }
    });

    return (
        <div>
            <button className="p-2 rounded border" onClick={() => {
                updatePost({
                    variables: {
                        updatePostId: postId,
                        views: Number(data?.Post.views) + 1
                    }
                });
            }}>update view</button>
            <h2 className=" text-2xl mb-3">{data?.Post.title}</h2>
            <p className="leading-relaxed mb-3">
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div>
                <div className="text-center mt-2 leading-none flex items-center justify-center w-full py-4">
                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <AiOutlineEye className="mr-1" size={24} /> {data?.Post.views}
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <AiOutlineComment className="mr-1" size={24} /> {data?.Post?.Comments?.length}
                    </span>

                    <Link className="ml-1" to="/posts">
                        Back
                    </Link>
                </div>

            </div>
        </div>
    )
}