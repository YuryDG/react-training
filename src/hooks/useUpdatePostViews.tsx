import { useMutation } from "@apollo/client"
import { UPDATE_POST } from "../Mutations"
import { UpdatePostVariables } from "../types"

export const useUpdatePostViews = () => {
    const [updatePost, { loading, data, error, }] = useMutation<{ id: number }, UpdatePostVariables>(UPDATE_POST);
    
    return {
        updatePost,
        loading,
        data,
        error
    }
}