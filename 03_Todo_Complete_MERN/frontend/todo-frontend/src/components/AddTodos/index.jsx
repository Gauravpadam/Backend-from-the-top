import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../../features/todoSlice";
import { useNavigate } from "react-router-dom";

function AddTodos(){
  const [todoText, setTodoText] = useState("")
  const dispatch = useDispatch();
  const serialNumber = useSelector(state => state.todos[todos.length - 1].serial_no + 1)
  const navigate = useNavigate();

  console.log(serialNumber); // (No  output)

  const submitHandler = () => {
    const data = {
      serial_no: serialNumber,
      todo: todoText
    }
    fetch('http://localhost/1414/makeTodo', {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then((res) => {
      if (res) dispatch(addTodo(data));
      navigate("/")
    })
  }
  return(
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Enter Todo" value={todoText} onChange={(e) => {setTodoText(e.target.value)}} />
      <button type="submit">Add todo</button>
    </form>
  )

}

export default AddTodos