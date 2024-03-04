
import { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Form from 'react-bootstrap/Form';



const UpdateModal = () => {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [taskTitle, setTaskTitle] = useState('');
const [Description, setDescription] = useState('');
const [tags, setTags] = useState('');
const {taskId} = useParams();


let getData = async () => {
    try {
    //   setIsLoading(true);

      let dataGotten = await axios.get(`https://personaltasks-backend.onrender.com/api/user/${taskId}`)
      ;
      console.log(dataGotten.data.task);
      setTaskTitle(dataGotten.data.task.taskTitle);
      setDescription(dataGotten.data.task.Description);
      setTags(dataGotten.data.task.tags);
    
    } catch (error) {
      console.log(error);
    } finally {
    //   setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
}, [taskId]);

return (
 <>

 <Button variant="primary" onClick={handleShow}>Launch demo modal</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledTextInput" className='fw-bold'>Task Title</Form.Label>
        <Form.Control  id="disabledTextInput" placeholder="Type a title" value={taskTitle} 
          onChange={(e)=>setTaskTitle(e.target.value)} /> </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledTextInput" className='fw-bold'>Description</Form.Label>
        <Form.Control id="disabledTextInput" placeholder="Type a description" value={Description} 
          onChange={(e)=>setDescription(e.target.value)}/></Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledSelect" className='fw-bold'>Tags</Form.Label>
        <Form.Select id="disabledSelect" value={tags} onChange={(e)=>setTags(e.target.value)}>
            <option>----</option>
            <option value="male">Urgent</option>
            <option value="female">Important</option></Form.Select></Form.Group>
       </Form> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
)

}

export default UpdateModal