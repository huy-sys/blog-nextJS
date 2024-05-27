// app/posts/[id]/page.tsx
import { notFound } from 'next/navigation';
import { posts } from '../../../lib/posts';

interface PostDetailProps {
    params: {
        id: string;
    };
}
export async function generateStaticParams() {
    return posts.map(post => ({
        id: post.id,
    }));
}

const PostDetailPage = ({ params }: PostDetailProps) => {
    const post = posts.find(post => post.id === params.id);

    if (!post) {
        notFound();
    }

    return (
        <div>
            <h1>{post?.title}</h1>
            <p>{post?.content}</p>
        </div>
    );
};

export default PostDetailPage;
