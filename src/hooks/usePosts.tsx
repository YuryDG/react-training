import { useQuery } from "@apollo/client";

import { GET_ALL_POSTS } from "../Query";
import { AllPostResponse } from "../types";

export const usePosts = () => {
    const { loading, error, data } = useQuery<AllPostResponse>(GET_ALL_POSTS);
    return {
        loading,
        error,
        data
    }
}