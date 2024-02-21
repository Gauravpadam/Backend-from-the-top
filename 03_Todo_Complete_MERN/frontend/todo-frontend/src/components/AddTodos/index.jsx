import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../../features/todoSlice";
import { useNavigate } from "react-router-dom";

function AddTodos(){
  const [todoText, setTodoText] = useState("")
  const dispatch = useDispatch();
  const serialNumber = useSelector(state => state.todos.length + 1) // todos was not defined; and this logic is correct
  const navigate = useNavigate();

  console.log(serialNumber); // (No  output)

  const submitHandler = async (e) => {
    e.preventDefault() // To prevent form submission
    const data = {
      serial_no: serialNumber,
      todo: todoText
    }
    await fetch('http://localhost:1414/makeTodo', {
      method: "POST",
      headers: {
         "content-type": "application/json", // Note: If you are using a express.json() middleware, pass the content-type property in headers to ensure json parsing else it will render an empty object
      },
      body: JSON.stringify(data)
    })
    .then((res) => {
      if (res.ok){ // ok status received
        dispatch(addTodo(data))
      } else {
        console.log("Some error occured");
      }
      navigate('/')
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