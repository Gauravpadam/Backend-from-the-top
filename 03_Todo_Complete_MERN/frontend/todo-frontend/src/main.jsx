import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './app/store/store.js';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AddTodos from './components/AddTodos';
import Todos from './components/Todos/index.jsx';

const router = createBrowserRouter([
  {  
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Todos />
      },
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
  <RouterProvider router={router}/>
  </Provider>
  </React.StrictMode>
)