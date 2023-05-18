import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import Navbar from "../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const getalltrainingsfunc = async () => {
  const response = await axios.get(
    `${
      process.env.REACT_APP_BACKEND_URL
    }/club/getAllTrainingGroup/${localStorage.getItem("clubid")}`
  );
  return response.data;
};

const getallcoachesfunc = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/coach/all`
  );
  return response.data;
};

function Booking(props) {
  const navigate = useNavigate();
  // const {
  //   data: alltrainings,
  //   isLoading: alltrainingsloading,
  //   refetch: refetchalltrainings,
  // } = useQuery("get_all_training", () => getalltrainingsfunc(), {
  //   refetchOnMount: false,
  //   refetchInterval: 5000,
  // });

  // const {
  //   data: allcoaches,
  //   isLoading: allcoachesloading,
  //   refetch: refetchallcoaches,
  // } = useQuery("get_all_coaches", () => getallcoachesfunc(), {
  //   refetchOnMount: false,
  //   refetchInterval: 5000,
  // });
  const gotocheckout = () => {
    navigate("/checkout");
  };

  let [hotels, setHotels] = useState([1, 2, 3, 4]);
  return (
    <Userhome>
      <Navbar />
      <div className="container py-5">
        <h1 className="heading px-5 py-2">Choose your trecking location</h1>

        <div className="row py-3">
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1594568284297-7c64464062b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8MTYlM0E5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="w-100"
            />
          </div>
          <div className="col-lg-6">
            <Singletreckingview className="">
              <div className="bg-training p-3 singletreckingview_inside">
                <h3>Kedarnath treck</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequuntur aspernatur id aliquid esse quo iusto placeat!
                  Impedit tempore sint ab voluptatibus soluta. Repudiandae
                  voluptas sequi hic cupiditate, est mollitia ratione
                  architecto, voluptatem similique voluptatum officia recusandae
                  repellendus necessitatibus aliquid? Fuga et quidem consequatur
                  numquam quos officia placeat voluptas minus quisquam aut eaque
                  inventore repudiandae suscipit, consequuntur non fugiat eum
                  facilis?
                </p>
                <h5>
                  <span className="small_header px-2">Duration: </span>4 days
                </h5>
                <h5>
                  <span className="small_header px-2">location: </span>kashmir
                </h5>

                <h2>$220 per person</h2>
                <div className="d-flex flex-row my-2">
                  <div className="small_header px-2 h5">No of persons: </div>
                  <div className=" mx-2 px-2 input_no_of_people_out">
                    <input
                      type="number"
                      className="input_no_of_people_in h4 px-3"
                      placeholder="1"
                    />
                  </div>
                </div>
                <div className="h1_book_now px-3 cursor_pointer">
                  <h1>BOOK NOW</h1>
                </div>
              </div>
            </Singletreckingview>
          </div>
        </div>

        <hr />
        <h1 className="heading px-5 py-2">
          Choose your preferred hotel for this trecking
        </h1>
        <div className="row">
          {hotels.map((t) => {
            return (
              <>
                <Singletreckingview className="col-lg-4 p-2">
                  <div className="bg-training p-3 singletreckingview_inside">
                    <h3>Kedarnath treck</h3>
                    <h5>
                      <span className="small_header px-2">Duration: </span>4
                      days
                    </h5>
                    <h5>
                      <span className="small_header px-2">location: </span>
                      kashmir
                    </h5>
                    <h2>$220 per person</h2>
                    <div className="h1_book_now px-3 cursor_pointer">
                      <h1>SELECT</h1>
                    </div>
                  </div>
                </Singletreckingview>
              </>
            );
          })}
        </div>

        <h1 className="heading px-5 py-2">Leave A Review For This Trecking</h1>

        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="star d-flex flex-row my-2">
            <div>
              <i
                className="fa fa-star-o fa-2x cursor_pointer"
                aria-hidden="true"
              ></i>
            </div>
            <div>
              <i
                className="fa fa-star-o fa-2x cursor_pointer"
                aria-hidden="true"
              ></i>
            </div>
            <div>
              <i
                className="fa fa-star-o fa-2x cursor_pointer"
                aria-hidden="true"
              ></i>
            </div>
            <div>
              <i
                className="fa fa-star-o fa-2x cursor_pointer"
                aria-hidden="true"
              ></i>
            </div>
            <div>
              <i
                className="fa fa-star-o fa-2x cursor_pointer"
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div className="h3 cursor_pointer send_button p-2">
            post <i class="fa fa-paper-plane" aria-hidden="true"></i>
          </div>
        </div>

        <textarea
          className="leave_comment p-2"
          name="myTextarea"
          id="myTextarea"
          rows="4"
          cols="50"
          placeholder="enter your review"
        ></textarea>

        <h1 className="heading px-5 py-2 my-3">
          Read What Our Users Say About This Trip
        </h1>
        <div className="row">
          {hotels.map((t) => {
            return (
              <>
                <Singletreckingview className="col-lg-4 p-2">
                  <div className="bg-training p-3 singletreckingview_inside">
                    <div className="d-flex flex-row justify-content-between">
                      <h3>apurba maity</h3>
                      <h3>
                        4 <i class="fa fa-star" aria-hidden="true"></i>
                      </h3>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repellat dolore in ea aliquam, accusantium natus
                      necessitatibus. Tenetur, nemo iusto. Perferendis eveniet
                      minus nemo aliquam. Rerum minus excepturi, nesciunt porro
                      animi incidunt voluptas omnis inventore error nulla! Sit,
                      aperiam provident. Distinctio?
                    </p>
                  </div>
                </Singletreckingview>
              </>
            );
          })}
        </div>

        <Padding></Padding>

        <div
          className="checkout_btn text-center py-2 cursor_pointer"
          onClick={() => gotocheckout()}
        >
          <h1>CHECKOUT</h1>
        </div>
      </div>
    </Userhome>
  );
}

const Userhome = styled.div`
  .heading {
    background-color: #98c1d9;
    color: #3d5a80;
    border-radius: 30px;
  }
  .checkout_btn {
    position: fixed;
    bottom: 20px;
    background-color: #ee6c4d;
    height: 60px;
    width: 80%;
    border-radius: 30px;
  }
  .leave_comment {
    border: 2px solid #3d5a80;
    border-radius: 15px;
  }
  .send_button{
    background-color: #3d5a80;
    color:white;
    border-radius: 15px;
  }
`;
const Singletreckingview = styled.div`
  .singletreckingview_inside {
    border: 5px solid #293241;
    border-radius: 20px;
  }
  .bg-training {
    background-color: #e0fbfc;
  }
  .small_header {
    background-color: #ee6c4d;
    border-radius: 10px;
  }
  .h1_book_now {
    background-color: #293241;
    color: #ee6c4d;
  }
  .input_no_of_people_in {
    background-color: #e0fbfc;
    border: 3px solid #293241;
    border-radius: 15px;
    height: 30px;
    width: 90px;
  }
`;

const Padding = styled.div`
  height: 60px;
`;

export default Booking;
