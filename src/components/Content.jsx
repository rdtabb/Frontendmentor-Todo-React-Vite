import ListItem from "./ListItem";
import FilterBoard from "./FilterBoard";

const Content = ({ items, handleChange, handleDelete, handleClick }) => {
  return (
    <div className="todo-list-container">
      {items.length ? items.map((item) => 
          <ListItem 
            uniqueId={item.id}
            item={item}
            handleChange={handleChange}
            handleDelete={handleDelete}
          />
        ) : null}
      <FilterBoard
        items={items}
        length={items.length}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Content;
