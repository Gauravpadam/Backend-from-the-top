import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { initTodos } from "../../features/todoSlice"
import { nanoid } from "@reduxjs/toolkit"


function Todos(){
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      await fetch('http://localhost:1414/')
      .then((res) => res.json())
      .then((data) => {
        if (data){
          dispatch(initTodos(data))
        } else {
          console.log("Well, something broke while fetching in useEffect");
        }
      })
      })();
  }, []);

  const todos = useSelector(state => state.todos)
  
  return todos ? (
    <div className="flex flex-wrap">
      <Link to="/addTodo">
        <button type="button">Add Todo</button>
      </Link>
      {todos && todos.map((todo) => (
        <div className="w-full" key={nanoid()}>
          {`${todo.serial_no} - ${todo.todo}`} {/* Most important lesson to learn here: I initiated states with small case todo and serial_no and my database had capital case variables. Earlier it was not a problem as I was not syncing states with database,
          but if you're syncing states and database; make sure you use the same nomenclature for the columns and state variables, or keep this in mind if your states work properly and the content is still not rendered, chances are this might be the problem */}
        </div>
      ))}
    </div>
  ) : <div>Loading...</div>
}

export default Todos