import { Outlet } from "react-router-dom"
import Todos from "./components/Todos"

function App() {
  return (
    <main>
    <Outlet />
    </main>
  )
}

export default App
