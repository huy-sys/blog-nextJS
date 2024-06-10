import { Post, posts } from "../lib/posts";
import Link from "next/link";

interface PostItemProps {
    post: Post;
    onDelete: (id: string) => void;
}


const PostItem = ({ post, onDelete }: PostItemProps) => {
    return (
        <>
            <div className="flex flex-col grow justify-center p-4 w-full bg-white rounded-xl border border-gray-200 border-solid max-md:mt-5">
                <img
                    loading="lazy"
                    srcSet={post.imagePost}
                    alt="Image post"
                    className="w-full aspect-[1.49]"
                />
                <div className="flex flex-col p-2 mt-4">
                    <div className="flex justify-between items-center">
                        <div className="justify-center self-start px-2.5 py-1 text-sm font-medium leading-5 text-indigo-500 whitespace-nowrap rounded-md bg-indigo-500 bg-opacity-10">
                            {post.tag}
                        </div>
                        <button onClick={() => onDelete(post.id)} className="text-red-500">Delete</button>
                    </div>
                    <div className="mt-4 text-2xl font-semibold leading-7 text-gray-900">
                            <Link href={`/blog/${post.id}`}>
                                {post.title}
                            </Link>
                        </div>
                    <div className="flex gap-5 mt-5 text-base leading-6 text-neutral-400">
                        <div className="flex gap-3 font-medium">
                            <img
                                loading="lazy"
                                alt="Image Author"
                                srcSet={post.imageAuthorSrc}
                                className="shrink-0 w-9 aspect-square"
                            />
                            <div className="my-auto">{post.createName}</div>
                        </div>
                        <div className="my-auto">{post.createDate}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PostItem;