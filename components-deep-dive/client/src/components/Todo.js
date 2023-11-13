import { useEffect } from 'react'

export default function Todo({
    _id,
    text,
    isCompleted,
    onStatusChange,
    onTodoDelete
}) {

    useEffect(() => {
        console.log('Update effect');
    }, [isCompleted]);

    useEffect(() => {
        return () => {
            console.log(`${text} is deleted`);
        }
    }, []);

    let classes = 'todo';
    if (isCompleted) {

        classes = classes + ' is-completed'
    }

    return (
        <tr className={classes}>
            <td>{text}</td>
            <td>{isCompleted ? 'Done' : 'In Progress'}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={e => onStatusChange(_id)}>Change status</button>
                \\
                <button className="btn todo-btn" onClick={e => onTodoDelete(_id)}>Delete</button>
            </td>
        </tr>
    );
}