import { useQuery } from "@apollo/client";

import { GET_ALL_POSTS } from "../Queries";
import { AllPostResponse, PostFilter } from "../types";

export const usePosts = () => {
    const { loading, error, data, ...rest } = useQuery<AllPostResponse, { filter: PostFilter }>(GET_ALL_POSTS, {
        // fetchPolicy: 'cache-and-network'
    });
    return {
        loading,
        error,
        data,
        ...rest
    }
}