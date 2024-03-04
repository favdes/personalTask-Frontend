import {useState} from 'react'
import img1 from '../images/Vector (4).png' 
import Container from "react-bootstrap/Container";
// import img2 from '../images/Vector (5).png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





const NewTasks = () => {
 const [taskTitle, setTaskTitle] = useState('');
 const [Description, setDescription] = useState('');
 const [tags, setTags] = useState('');
 const navigate = useNavigate()
  async function handleSubmit(e){
    e.preventDefault()
    // console.log("hello world");
    try{
      const data = await axios.post(' https://personaltasks-backend.onrender.com/api/user',{
        taskTitle,
        Description,
        tags
      })
      if(data.status === 201){
        alert(data.data.msg)
        navigate('/MyTask')
        console.log(data);
      }
    }catch(error){
      console.log(error);
      alert(error.response.data.msg.message)
    }
  }
  return (
    <>
    <div className='container d-flex gap-4'>
      <div className='next w-0.8'>
        <Link to="/MyTask" className=" text-decoration-none"><img src={img1} alt="" /></Link></div>
      <h1>New Task</h1></div>
       
       <Container>
      <div className='d-flex'>
        <div className="input-container col-12 col-md-12 mt-5  ">
          <span className='task-title'><h3>Task Title</h3></span>
          <input className=' input form-control p-4' placeholder='E.g Project Defense, Assignment ...' type="text" />
        </div></div>
      </Container>

      <Container>
      <div className='d-flex'>
        <div className="input-container2  col-12  col-md-12 mt-5 ">
          <span className='task-title2'><h3>Description</h3></span>
          <textarea
              cols="30"
              rows="5"
              className="inputin  form-control p-4 "
              placeholder="Briefly describe your task..."
              type="text"
            />
        </div>
  
      </div>
      </Container>
      
      <div className=''>
        <div className="input-container col-12 col-md-12 mt-4  ">
          <span className='task-title'><h3>Tags</h3></span>
          <Form.Select aria-label="Default select example">
      <option value="1">Urgent</option>
      <option value="2">Important</option></Form.Select>
          </div>
       </div>
      
      <Container><Link to="/MyTask" className=" text-decoration-none"><div className=" mt-4 d-grid gap-2">
        <Button className='don' variant="" size="lg"><h5 className='dontext'>Done</h5></Button></div></Link></Container>
       
      <div className="text-center mt-4">
        <Link   onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} className=" ">
          <h5 className="">Back To Top</h5>
        </Link> </div>












      
       {/* <Container className='footer2'><button>Done</button></Container> */}
          
       {/* <div className='top'><button>Done</button></div> */}
        

      </>
  )
}

export default NewTasks