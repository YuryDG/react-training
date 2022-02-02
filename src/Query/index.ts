import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
query allPosts($filter: PostFilter) {
    allPosts(filter: $filter) {
      id
      title
      User {
        id
        name
      }
      views
      Comments {
        id
        post_id
        body
        date
      }
    }
  }
`;