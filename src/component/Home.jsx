import React from "react";
import img1 from "../images/Component 1.png";

const Home = () => {
  return (
    <div className="container">
      <main className="row justify-content-between my-5">
        <div className="col-sm-12 col-lg-6">
          <h1>Manage your Tasks on</h1>
          <h2 className="taskduty">TaskDuty</h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            qui iste unde explicabo libero, possimus, hic dolorum quibusdam
            perspiciatis, voluptate cum magni. Quo neque vitae commodi at,
            voluptatibus necessitatibus eius minima cupiditate, hic quos modi.
          </p>
          <button type="button" class="btn btn-">
           <h5 className="btntext"> Go To My Tasks</h5>
          </button>
        </div>
        <div className="col-sm-12 col-lg-5">
          <img src={img1} alt="" className="w-75" />
        </div>
      </main>
    </div>
  );
};

export default Home;
