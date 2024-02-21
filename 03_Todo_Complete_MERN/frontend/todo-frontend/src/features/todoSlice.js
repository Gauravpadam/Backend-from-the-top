import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// const fetchedTodos = await fetch('http://localhost:1414/')
//                      .then((res) => res.json())
//                      .then((data) => data)

// To handle async functions in slices,
// redux uses createAsyncThunk

/*
Docs: https://redux-toolkit.js.org/api/createAsyncThunk

A function that accepts a Redux action type string and a callback function that should return a promise. It generates promise lifecycle action types based on the action type prefix that you pass in, and returns a thunk action creator that will run the promise callback and dispatch the lifecycle actions based on the returned promise.
*/

// First, create a thunk
// const fetchTodos = createAsyncThunk(
//   'todo',
//   async () => {
//     const response = await fetch('http://localhost:1414/')
//     .then((res) => res.json())
//     .then((data) => data)

//     console.log(response);

//     return response
//   }
// )


const initialState = {

    todos: []

}
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        serial_no: state.todos.length + 1,
        todo: action.payload.todo
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.serial_no !== action.payload)
    }
  },
  // Consume the thunk action in a reducer
  // extraReducers: (builder) => {
  //   builder.addCase(fetchTodos.fulfilled, (state, action) => {
  //     state.todos = action.payload
  //   })
  // }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer;