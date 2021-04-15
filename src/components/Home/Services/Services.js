import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section class="service" id="service">
      <div class="container">
        <div class="content">
          <div class="text box wow slideInLeft">
            <h2>Services</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
            <a href="" class="btn text-light" style={{border:'1px solid black'}}>
              Start Now
            </a>
          </div>

          <div class="accordian box wow slideInRight">
            <div class="accordian-container active">
              <div class="head">
                <h4>Cardiovascular Equipment</h4>
              </div>
            </div>
            <div class="accordian-container">
              <div class="head">
                <h4>Strength Training Equipment</h4>
              </div>
            </div>
            <div class="accordian-container">
              <div class="head">
                <h4>Group Fitness Class</h4>
              </div>
            </div>
            <div class="accordian-container">
              <div class="head">
                <h4>Other Services</h4>
              </div>
            </div>


            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
