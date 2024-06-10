import { useEffect, useState } from "react";
import { Post, posts } from "./posts";

function useTodo() {
    const [todos, setTodos] = useState<Post[]>(() => {
        const savedTodos = localStorage.getItem('postList');
        return savedTodos ? JSON.parse(savedTodos) : posts;
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

    useEffect(() => {
        localStorage.setItem('postList', JSON.stringify(todos));
    }, [todos]);
    // Nếu dependencies thay đổi thì sẽ chạy useEffect để chạy hàm bên trong
    useEffect(() => {
        if (alertMessage !== '') {
            alert(alertMessage);
            setAlertMessage('');
        }
    }, [alertMessage])

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setInputText(e.target.value);
    // };

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
            setTodos(prevTodos => [...prevTodos, newTodo]);
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
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        setTimeout(() => {
            setAlertMessage('Todo removed successfully!')
        }, 100);
    };

    // Khi bắt đầu chỉnh sửa
    const handleEditTodo = (id: string, newText: string) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                // Nếu trùng với id đang chỉnh sửa thì thay text hiện tại bằng text mới không giữ nguyên todo
                todo.id === id ? { ...todo, text: newText } : todo
            )
        );
    };

    console.log('todoAF', todos)

    return {
        todos,
        title,
        content,
        tag,
        createName,
        createDate,
        imageAuthorSrc,
        imagePost,
        handleAddTodo,
        handleDeleteTodo,
        handleEditTodo
    };
}

export default useTodo;