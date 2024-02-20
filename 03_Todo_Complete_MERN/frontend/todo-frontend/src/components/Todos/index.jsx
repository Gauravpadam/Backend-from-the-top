import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


function Todos(){
  const todos = useSelector(state => state.todos)
  return todos ? (
    <div className="flex flex-wrap">
      <Link to="/addTodo">
        <button type="button">Add Todo</button>
      </Link>
      {todos && todos.map((todo) => (
        <div className="w-full" key={todo.serial_no}>
          {todo.todo}
        </div>
      ))}
    </div>
  ) : (
    <Link to="/addTodo">
      <button type="button">Add Todo</button>
    </Link>
  )

}

export default Todos