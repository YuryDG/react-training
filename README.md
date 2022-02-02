# ApolloClient v3

For this project I'll be using a awesome package called [json-graphql-server](https://github.com/marmelab/json-graphql-server) to get a full fake GraphQL API with zero coding in less than 30 seconds. 



## Features in this example
- CRUD Post
- CRUD Comment    
- CRUD User

## Generated Queries
```
Post(id: ID!): Post

allPosts(
    page: Int
    perPage: Int
    sortField: String
    sortOrder: String
    filter: PostFilter
): [Post]

_allPostsMeta(
    page: Int
    perPage: Int
    filter: PostFilter
): ListMetadata

User(id: ID!): User

allUsers(
    page: Int
    perPage: Int
    sortField: String
    sortOrder: String
    filter: UserFilter
): [User]

_allUsersMeta(
    page: Int
    perPage: Int
    filter: UserFilter
): ListMetadata

Comment(id: ID!): Comment

allComments(
    page: Int
    perPage: Int
    sortField: String
    sortOrder: String
    filter: CommentFilter
): [Comment]

_allCommentsMeta(
    page: Int
    perPage: Int
    filter: CommentFilter
): ListMetadata
```

## Generated Mutations
```
createPost(
    title: String!
    views: Int!
    user_id: ID!
): Post

createManyPost(data: [PostInput]): [Post]

updatePost(id: ID!
    title: String
    views: Int
    user_id: ID
): Post

removePost(id: ID!): Post

createUser(name: String!): User

createManyUser(data: [UserInput]): [User]

updateUser(id: ID!name: String): User

removeUser(id: ID!): User

createComment(
    post_id: ID!
    body: String!
    date: Date!
): Comment

createManyComment(data: [CommentInput]): [Comment]

updateComment(
    id: ID!
    post_id: ID
    body: String
    date: Date
): Comment

removeComment(id: ID!): Comment
```
