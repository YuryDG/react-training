import { gql } from "@apollo/client";

export const UPDATE_POST = gql`
mutation updatePost($updatePostId: ID!, $views: Int) {
  updatePost(id: $updatePostId, views: $views) {
    id
  }
}
`;