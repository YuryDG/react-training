export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export type NavigationState = {
    from: string;
}

export type Message = {
    title: string;
    info: string;
    type: "error" | 'info'
};

// Book from FireStore
export type Book = {
    id: string;
    title: string;
    author: string;
}

export type NewBook = Pick<Book, 'author' | 'title'>;