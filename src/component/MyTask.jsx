import React , {useEffect, useState}from "react";
import NavBar from "./NavBar";
import '../style/mytask.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img1 from "../images/fluent_add-24-filled.png";
import img2 from "../images/clarity_note-edit-line.png";
import img3 from "../images/Vector (1).png";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import img4 from "../images/Vector (5).png";
import img5 from '../images/Urgent.png';
import img6 from '../images/Important.png'
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'

const MyTask = () => { 
  const [data, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async ()=>{
    try{
      setIsLoading(true);
      const fetcher =await axios.get("http://localhost:9090/api/user");
      console.log(fetcher.data.tasks);

      setDate(fetcher.data.tasks);
    }catch (error){
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    }
   
    useEffect(() => {
      document.title = 'My-Task || page';
      getData();
  }, []);
  
  return (
    <>
     <div className="container">
        <div>
          {isLoading && <Spinner animation="border"/>}
          {data.map((datum)=>{
            const {_id, taskTitle,Description,tags} = datum
            return(
              <div key={_id} className="bord">
                <h1>{tags}</h1>
                <h1>{taskTitle}</h1>
                <h1>{Description}</h1>
              </div>
            )
          })}
        </div>
     </div>
    </>
  );

        }
export default MyTask;