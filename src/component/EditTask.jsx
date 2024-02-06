import React from "react";
import Container from "react-bootstrap/Container";
import img1 from "../images/Vector (4).png";
import img2 from "../images/Vector (5).png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";




const EditTask = () => {
  return (
    <>
      <div className="container d-flex gap-4">
        <div className="next w-0.8">
        <Link to="/MyTask" className=" text-decoration-none"><img src={img1} alt="" /></Link>
        
        
        </div>
        <h1>Edit Task</h1>
      </div>

      <Container>
        <div className="d-flex">
          <div className="input-container col-12 col-md-16 mt-4 ">
            <span className="task-title">
              <h3>Task Title</h3>
            </span>
            <input
              className="para form-control p-4"
              placeholder="Project Completion"
              type="text"
            />
          </div>
        </div>
      </Container>

      <Container>
        <div className="d-flex">
          <div className="input-container2  col-12 col-md-12  mt-4  ">
            <span className=" task-title2">
              <h3>Description</h3>
            </span>
            {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
            <textarea
              cols="30"
              rows="5"
              className="para  form-control p-4 "
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut inventore similique facere alias corporis labore exercitationem quidem officiis numquam facilis veniam quia autem deserunt at maxime et tempora dolorem quis debitis suscipit, sint ea ipsa. Veniam magnam ad magni officia doloribus modi, sequi vitae molestias accusantium amet neque eveniet?"
              type="text"
            />
          </div>
        </div>
      </Container>
      <Container>
        
        <div className="d-flex">
          <div className="input-container col-12 col-md-16 mt-4  ">
            <span className="task-title">
              <h3>Tags</h3>
            </span>
           <input className=" tag d-flex input form-control p-4" placeholder="urgent" type="text" />
           
          </div>
        </div>
      </Container>

      <Container><Link to="/MyTask" className="don text-decoration-none">
        <div className=" mt-4 d-grid gap-2">
          <Button className="don" variant="" size="lg">
           <h5 className="dontext"> Done</h5>
          </Button>
        </div></Link>
      </Container>

      <div className="text-center mt-4">
        <Link
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className=" "
        >
          <h5 className="">Back To Top</h5>
        </Link>
        <select name="" id="">
          <option value=""><img src={img1} alt="" /></option>
          <option value=""><img src={img2} alt="" /></option>
        </select>
      </div>
    </>
  );
};

export default EditTask;
