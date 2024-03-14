import {useEffect, useState}from "react";
import '../style/mytask.css'
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'

const MyTask = () => { 
  const [data, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async ()=>{
    try{
      setIsLoading(true);
      const fetcher =await axios.get("https://personaltasks-backend.onrender.com/api/user");
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