import React from 'react';
import Nezha_1 from "../assets/Nezha_1.jpg";

function Projects() {
  return (
    <>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card mx-auto">
              <img src={Nezha_1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title 1</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mx-auto">
              <img src={Nezha_1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title 2</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mx-auto">
              <img src={Nezha_1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title 3</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mx-auto">
              <img src={Nezha_1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title 4</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Projects;
