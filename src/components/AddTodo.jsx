const AddTodo = ({handleSubmit, newItems, setNewItems}) => {
    return(
        <form onSubmit={handleSubmit} className="add-task-container">
            <input 
                type="checkbox"
                className="add-task-checkbox" 
                name="check"
                id="add-task"
            />
            <input 
                type="text" 
                id="input-value" 
                placeholder="Add your task here"
                value={newItems}
                onChange={(e) => setNewItems(e.target.value)}
                required
            />
        </form>
    )
}

export default AddTodo