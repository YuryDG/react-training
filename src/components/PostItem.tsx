import { Post } from "../types";
import { AiOutlineEye, AiOutlineComment, AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useEffect } from "react";

type PostItemProps = {
    post: Post;
};

export const PostItem: React.FC<PostItemProps> = ({ post }) => {

    useEffect(() => {
        // update the views of the component
    }, [])

    const handlePostClick = () => {

    }

    return (
        <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </h2>
                <p className="leading-relaxed mb-3">
                    What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <Link to={`/posts/${post.id}`} className="text-indigo-500 inline-flex items-center cursor-pointer">Learn More
                    <AiOutlineArrowRight className="ml-1" size={16} />
                </Link>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <AiOutlineEye className="mr-1" size={24} /> {post.views}
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <AiOutlineComment className="mr-1" size={24} /> {post.Comments?.length}
                    </span>
                </div>
            </div>
        </div>
    )
}