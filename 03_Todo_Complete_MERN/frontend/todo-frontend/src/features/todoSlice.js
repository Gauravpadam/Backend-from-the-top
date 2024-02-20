import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      serial_no: 1,
      todo: "foobar"
    },
  ]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        serial_no: action.payload.serial_no,
        todo: action.payload.todo
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.serial_no !== action.payload)
    }
  }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer;