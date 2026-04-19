

import { Routes, Route } from "react-router"
import { Login, Dashboard, AddStudent, AddTeacher } from "./pages"
import Layout from "./components/Layout"
import Subjects from "./pages/Subjects"
import Students from "./pages/Students"

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route path='/' element={<Layout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/addStudent' element={<AddStudent />} />
          <Route path='/addteacher' element={<AddTeacher />} />
          <Route path='/subjects' element={<Subjects />} />
          <Route path='/students' element={<Students />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
