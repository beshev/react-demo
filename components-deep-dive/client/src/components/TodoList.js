import Todo from "./Todo";

export default function TodoList({
    todos,
    onStatusChange,
    onTodoDelete
}) {
    const todosList = todos.map(todo => <Todo 
                                            key={todo['_id']} 
                                            {...todo}
                                            onStatusChange={onStatusChange}
                                            onTodoDelete={onTodoDelete} />);
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>
                {todosList}
            </tbody>
        </table>
    );
}