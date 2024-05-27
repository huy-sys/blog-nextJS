// lib/posts.ts
export interface Post {
    id: string;
    title: string;
    content: string;
}

export const posts: Post[] = [
    {
        id: '1',
        title: 'First Post',
        content: 'This is the content of the first post.',
    },
    {
        id: '2',
        title: 'Second Post',
        content: 'This is the content of the second post.',
    },
    {
        id: '3',
        title: 'Second Post',
        content: 'This is the content of the second post.',
    },
    {
        id: '4',
        title: 'Second Post',
        content: 'This is the content of the second post.',
    },
    {
        id: '5',
        title: 'Second Post',
        content: 'This is the content of the second post.',
    },
    {
        id: '6',
        title: 'Second Post',
        content: 'This is the content of the second post.',
    },
    // Add more posts here
];
