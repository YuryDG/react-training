import { useQuery } from "@apollo/client";

import { GET_ALL_POSTS } from "../Queries";
import { AllPostResponse, PostFilter } from "../types";

export const usePosts = () => {
    const { loading, error, data } = useQuery<AllPostResponse, { filter: PostFilter }>(GET_ALL_POSTS, {
        variables: {
            filter: {}
        }
    });
    return {
        loading,
        error,
        data
    }
}