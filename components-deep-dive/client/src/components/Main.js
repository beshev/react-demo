import TodoList from "./TodoList";

export default function Main({
    todos,
    IsLoading,
    onStatusChange,
    onTodoAdd,
    onTodoDelete
}) {
    return (
        <main className="main">
            <section className="todo-list-container">
                <h1>Todo List</h1>

                <div className="add-btn-container">
                    <button className="btn" onClick={() => onTodoAdd()}>+ Add new Todo</button>
                </div>

                <div className="table-wrapper">

                    {/* <!-- Loading spinner - show the load spinner when fetching the data from the server--> */}
                    {IsLoading ? (
                        <div className="loading-container">
                            <div className="loading-spinner">
                                <span className="loading-spinner-text">Loading</span>
                            </div>
                        </div>
                    )
                    : (<TodoList 
                        todos={todos}
                        onStatusChange={onStatusChange}
                        onTodoDelete={onTodoDelete} />)}

                </div>
            </section>
        </main>
    );
}