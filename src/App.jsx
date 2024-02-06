import NavBar from './component/NavBar'
import './App.css'
import Home from './component/Home'
import MyTask from './component/MyTask';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import NewTasks from './component/NewTasks';
import EditTask from './component/EditTask';



const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route index element={<Home/>} />
      <Route path='/MyTask'  element={<MyTask/>}/>
      <Route path='/NewTasks' element={<NewTasks/>}/>
      <Route path='/EditTask' element={<EditTask/>}/>
    </Routes>
    
    </BrowserRouter>

    

    </>
  )
}

export default App
