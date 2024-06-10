"use client";
import { useEffect, useState } from "react";
import { Post, posts } from "../../lib/posts";
import style from './write.module.css'
import Link from "next/link";
import FooterPage from "../../components/FooterPage";

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

    const getNextIdNumber = (): number => {
        return posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 1;
    };
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, imageType: string) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (imageType === 'imagePost') {
                    setImagePost(reader.result as string);
                } else {
                    setImageAuthorSrc(reader.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const updateTodos = (newPosts: Post[]) => {
        setPosts(newPosts);
        localStorage.setItem('postList', JSON.stringify(newPosts));
    };

    const handleAddTodo = () => {
        if (title.trim() !== '') {
            const newTodo: Post = {
                id: getNextIdNumber().toString(),
                title: title.trim(),
                content: content,
                tag: tag,
                createName: createName,
                createDate: createDate,
                imageAuthorSrc: imageAuthorSrc,
                imagePost: imagePost,
            };
            updateTodos([...posts, newTodo]);
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
        <div className="bg-slate-50 py-10">
            <div className={style.headerCreateCoontainer}>
                <h1>Create a new post</h1>
                <button className={style.summitBtn} onClick={handleAddTodo}>Create</button>
            </div>
            <div className={style.createContainer}>
                <div className={style.inputName}>Title</div>
                <input
                    type="text"
                    className='w-full outline-0 bg-light-white-100 rounded-xl p-4'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <div className={style.inputName}>Content</div>
                <input
                    type="text"
                    className='w-full outline-0 bg-light-white-100 rounded-xl p-4'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <div className={style.inputName}>Tag</div>
                <input
                    type="text"
                    className='w-full outline-0 bg-light-white-100 rounded-xl p-4'
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                />

                <div className={style.inputName}>Create name</div>
                <input
                    type="text"
                    className='w-full outline-0 bg-light-white-100 rounded-xl p-4'
                    value={createName}
                    onChange={(e) => setCreateName(e.target.value)}
                />

                <div className={style.inputName}>Create Date</div>
                <input
                    type="text"
                    className='w-full outline-0 bg-light-white-100 rounded-xl p-4'
                    value={createDate}
                    onChange={(e) => setCreateDate(e.target.value)}
                />

                <div className={style.inputName}>Image Author Src</div>
                <input
                    type="text"
                    className='w-full outline-0 bg-light-white-100 rounded-xl p-4'
                    value={imageAuthorSrc}
                    onChange={(e) => setImageAuthorSrc(e.target.value)}
                />

                <input type="file" onChange={(e) => handleImageUpload(e, 'imageAuthorSrc')} />
                {imageAuthorSrc && <img src={imageAuthorSrc} alt="Todo" style={{ width: '100px', height: '100px' }} />}

                <div className={style.inputName}>Image Post</div>
                <input
                    type="text"
                    className='w-full outline-0 bg-light-white-100 rounded-xl p-4'
                    value={imagePost}
                    onChange={(e) => setImagePost(e.target.value)}
                />
                <input type="file" onChange={(e) => handleImageUpload(e, 'imagePost')} />
                {imagePost && <img src={imagePost} alt="Todo" style={{ width: '100px', height: '100px' }} />}
            </div>
        </div>
    );
}

export default PostCreate;