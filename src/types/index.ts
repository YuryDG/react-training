export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export type User = {
    id: number;
    name: string;
    Posts?: Post[]
}

export type Comments = {
    id: number;
    post_id: number;
    body: string;
    date: Date;
    Post?: Post;
}

export type Post = {
    id: string;
    title: string;
    views: string;
    user_id: string;
    User?: User;
    Comments?: Comment[];
}

export type UserFilter = {
    q?: string;
    ids?: number[];
    id?: number;
    name?: string;
    id_neq?: number;
    name_neq?: string;
}

export type PostFilter = {
    q?: string;
    ids?: number[];
    id?: number;
    title?: string;
    views?: number;
    user_id?: number;
    id_neq?: number;
    title_neq?: string;
    views_lt?: number;
    views_lte?: number;
    views_gt?: number;
    views_gte?: number;
    views_neq?: number;
    user_id_neq?: number;
}

export type CommentFilter = {
    q: string;
    ids: number[];
    id: number;
    post_id: number;
    body: string;
    date: Date;
    id_neq: number;
    post_id_neq: number;
    body_neq: string;
    date_lt: Date;
    date_lte: Date;
    date_gt: Date;
    date_gte: Date;
    date_neq: Date;
}

export type AllPostResponse = {
    allPosts: Post[]
}

export type GetAllPostsVariables = {
    filter: PostFilter
}

export type UpdatePostVariables = {
    updatePostId: number;
    views: number;
}

export type GetUsersResponse = {
    allUsers: User[]
}