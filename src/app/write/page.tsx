"use client";
import { useEffect, useState } from "react";
import { Post, posts } from "../../lib/posts";
import style from './write.module.css'
import Link from "next/link";

const PostCreate = () => {

    const [posts, setPosts] = useState<Post[]>(() => {
        const savedPosts = localStorage.getItem('postList');
        return savedPosts ? JSON.parse(savedPosts) : posts;
    });
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [tag, setTag] = useState<string>('');
    const [createName, setCreateName] = useState<string>('');
    const [createDate, setCreateDate] = useState<string>('');
    const [imageAuthorSrc, setImageAuthorSrc] = useState<string>('');
    const [imagePost, setImagePost] = useState<string>('');
    const [alertMessage, setAlertMessage] = useState<string>('')
    const [counter, setCounter] = useState<number>(1);
    console.log('posts', posts)

    // Nếu dependencies thay đổi thì sẽ chạy useEffect để chạy hàm bên trong
    useEffect(() => {
        if (alertMessage !== '') {
            alert(alertMessage);
            setAlertMessage('');
        }
    }, [alertMessage])

    // useEffect(() => {
    //     const storedPosts = localStorage.getItem('posts');
    //     if (storedPosts) {
    //         setPosts(JSON.parse(storedPosts));
    //     }
    // }, []);

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);

    const handleAddTodo = () => {
        if (title.trim() !== '') {
            const newTodo: Post = {
                id: counter.toString(),
                title: title.trim(),
                content: content,
                tag: tag,
                createName: createName,
                createDate: createDate,
                imageAuthorSrc: imageAuthorSrc,
                imagePost: imagePost,
            };
            setPosts(prevPosts => [...prevPosts, newTodo]);
            setTitle('');
            setContent('');
            setTag('');
            setCreateName('');
            setCreateDate('');
            setImageAuthorSrc('');
            setImagePost('');
            setCounter(counter + 1);
            setTimeout(() => {
                setAlertMessage('Todo added successfully!')
            }, 100);
        }
    };

    const handleDeleteTodo = (id: string) => {
        setPosts(prevPosts => prevPosts.filter(todo => todo.id !== id));
        setTimeout(() => {
            setAlertMessage('Todo removed successfully!')
        }, 100);
    };

    // Khi bắt đầu chỉnh sửa
    const handleEditTodo = (id: string, newText: string) => {
        setPosts(prevPosts =>
            prevPosts.map(todo =>
                // Nếu trùng với id đang chỉnh sửa thì thay text hiện tại bằng text mới không giữ nguyên todo
                todo.id === id ? { ...todo, text: newText } : todo
            )
        );
    };

    return (
        <>
            <div className="flex flex-col justify-center bg-slate-400">
                <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="flex justify-center items-center px-16 py-8 w-full max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5 justify-between max-w-full w-[1220px] max-md:flex-wrap">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccc8343a891916293e0885ec85dd6080fad46cfcaddfab48436f5f7bbb36ff2e?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&"
                                className="shrink-0 max-w-full aspect-[4.35] w-[158px]"
                            />
                            <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                                <div className="flex justify-center items-center px-16 my-auto text-base leading-6 text-zinc-700 max-md:px-5 max-md:max-w-full">
                                    <div className="flex gap-5 justify-between px-px max-md:flex-wrap">
                                        <div className="justify-center whitespace-nowrap">
                                            <Link href="/homePage">
                                                <span>Home</span>
                                            </Link>
                                        </div>
                                        <div className="justify-center whitespace-nowrap">
                                            <Link href="/blog">
                                                <span>Blog</span>
                                            </Link>
                                        </div>
                                        <div className="justify-center">Single Post</div>
                                        <div className="justify-center whitespace-nowrap">Pages</div>
                                        <div className="justify-center whitespace-nowrap">
                                            Contact
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between text-sm leading-5 whitespace-nowrap text-zinc-400">
                                    <div className="flex gap-3 py-2 pr-2 pl-4 rounded-md bg-zinc-100">
                                        <div className="flex-1">Search</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e1024d9c520cd635a66c84da1cba18cde0a18948f7d97bef90c8a00935a7be7?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&"
                                            className="shrink-0 my-auto w-4 aspect-square"
                                        />
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e85a5e0f7160aca9ae30b1a32fa98d56c6946a7411322a0b1e6dab7d9996d7f6?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&"
                                        className="shrink-0 my-auto w-12 aspect-[1.72]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.headerCreateCoontainer}>
                        <h1>Todo List</h1>
                        <button className={style.summitBtn} onClick={handleAddTodo}>Add Todo</button>
                    </div>
                    <div className={style.createContainer}>
                        <div className={style.inputName}>Title</div>
                        <input
                            type="text"
                            className={style.todoInput}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <div className={style.inputName}>content</div>
                        <input
                            type="text"
                            className={style.todoInput}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />

                        <div className={style.inputName}>tag</div>
                        <input
                            type="text"
                            className={style.todoInput}
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}
                        />

                        <div className={style.inputName}>createName</div>
                        <input
                            type="text"
                            className={style.todoInput}
                            value={createName}
                            onChange={(e) => setCreateName(e.target.value)}
                        />

                        <div className={style.inputName}>createDate</div>
                        <input
                            type="text"
                            className={style.todoInput}
                            value={createDate}
                            onChange={(e) => setCreateDate(e.target.value)}
                        />

                        <div className={style.inputName}>imageAuthorSrc</div>
                        <input
                            type="text"
                            className={style.todoInput}
                            value={imageAuthorSrc}
                            onChange={(e) => setImageAuthorSrc(e.target.value)}
                        />

                        <div className={style.inputName}>imagePost</div>
                        <input
                            type="text"
                            className={style.todoInput}
                            value={imagePost}
                            onChange={(e) => setImagePost(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostCreate;