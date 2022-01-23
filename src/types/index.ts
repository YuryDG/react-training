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