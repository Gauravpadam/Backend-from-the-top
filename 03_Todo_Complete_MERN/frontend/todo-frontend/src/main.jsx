import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './app/store/store.js';
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AddTodos from './components/AddTodos'

const router = createBrowserRouter([
  {  
    path: "/",
    element: <App />,
    children: [
      {
        path: "/addTodo",
        element: <AddTodos />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
