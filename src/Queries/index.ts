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

export const GET_POST = gql`
query GetPost($postId: ID!) {
  Post(id: $postId) {
    id
    title
    views
    user_id
    User {
      id
      name
    }
    Comments {
      id
      post_id
      body
      date
    }
  }
}
`;

export const GET_USERS = gql`
query AllUsers {
  allUsers {
    id
    name
  }
}`