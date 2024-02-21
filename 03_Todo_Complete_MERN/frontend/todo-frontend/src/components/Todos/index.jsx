import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addTodo } from "../../features/todoSlice"


function Todos(){
  const fetchTodos = async () => await fetch('http://localhost:1414/').then((res) => res.json()).then((data) => dispatch(addTodo(data)))

  useEffect(() => {
    
  }, [])

  const dispatch = useDispatch()
  const [loading, setLoading] = useState('')
  
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