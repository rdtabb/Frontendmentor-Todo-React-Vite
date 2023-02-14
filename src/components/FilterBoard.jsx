const FilterBoard = ({ length, handleClick, handleShowActiveFilter, handleShowAllFilter, handleShowInactiveFilter }) => {
    return (
        <div className="todo-container todo-container--text">
            <p>{length} items left</p>
            <ul>
                <li onClick={handleShowAllFilter} data-active="true">All</li>
                <li onClick={handleShowActiveFilter} data-active="false">Active</li>
                <li onClick={handleShowInactiveFilter} data-active="false">Completed</li>
            </ul>
            <button onClick={handleClick}>Clear completed</button>
        </div>
    )
}

export default FilterBoard