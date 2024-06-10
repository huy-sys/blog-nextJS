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

    // Nếu dependencies thay đổi thì sẽ chạy useEffect để chạy hàm bên trong
    useEffect(() => {
        if (alertMessage !== '') {
            alert(alertMessage);
            setAlertMessage('');
        }
    }, [alertMessage])

    useEffect(() => {
        const storedTodos = localStorage.getItem('postList');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    const updateTodos = (newTodos: Post[]) => {
        setTodos(newTodos);
        localStorage.setItem('postList', JSON.stringify(newTodos));
    };

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setInputText(e.target.value);
    // };
    const getNextIdNumber = (): number => {
        return todos.length > 0 ? Math.max(...todos.map(todo => todo.idNumber)) + 1 : 1;
    };

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
            updateTodos([...todos, newTodo]);
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
        const newTodos = todos.filter((todo) => todo.id !== id);
        updateTodos(newTodos);
        setTimeout(() => {
            setAlertMessage('Todo removed successfully!')
        }, 100);
    };

    // Khi bắt đầu chỉnh sửa
    const handleEditTodo = (id: string, newText: string) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, text: newText } : todo
        );
        updateTodos(newTodos);
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