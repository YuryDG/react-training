import { useQuery } from "@apollo/client";

import { GET_POST } from "../Queries";
import { Post } from "../types";

export const usePost = (postId: number) => {
    const { loading, error, data, ...rest } = useQuery<{ Post: Post }, { postId: number }>(GET_POST, {
        variables: {
            postId
        },
        errorPolicy: 'all',
        onCompleted: (data) => {
            console.log('onCompleted', data.Post);
        },
        onError: (error) => {
            console.log({ error })
        }
    });

    return {
        loading,
        error,
        data,
        ...rest
    }
}