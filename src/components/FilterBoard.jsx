const FilterBoard = ({ length, handleClick, handleShowActiveFilter }) => {
    return (
        <div className="todo-container todo-container--text">
            <p>{length} items left</p>
            <ul>
                <li data-active="true">All</li>
                <li onClick={handleShowActiveFilter} data-active="false">Active</li>
                <li data-active="false">Completed</li>
            </ul>
            <button onClick={handleClick}>Clear completed</button>
        </div>
    )
}

export default FilterBoard