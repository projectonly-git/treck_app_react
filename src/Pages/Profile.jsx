import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import Navbar from "../Components/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getAllBookings = async (treckid) => {
  const response = await axios.get(
    `${
      process.env.REACT_APP_BACKEND_URL
    }/home/get/orders/${localStorage.getItem("id")}`
  );
  return response.data;
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function Profile(props) {
  const navigate = useNavigate();

  // ++++++ fetch all hotels for that treck +++++++++++
  const {
    data: allBookings,
    isLoading: allActivityL,
    refetch: allActivityR,
  } = useQuery("get_all_bookings", () => getAllBookings(), {
    refetchOnMount: false,
    refetchInterval: 5000,
  });

  if (allActivityL) return "loading...";
  return (
    <Userhome>
      <ToastContainer />
      <Navbar />
      <div className="container py-5">
        <h1 className="heading px-5 py-2 my-3">
          Explore all the upcoming activities
        </h1>
        <div className="row">
          {allBookings?.map((booking, index) => {
            return (
              <div className="col-lg-4 my-2">
                {booking.trek != null && (
                  <Singletreckingview className="">
                    <div className="bg-training p-3 singletreckingview_inside">
                      <h3>{booking.trek.treckname}</h3>
                      <h5 className="d-flex flex-row">
                        <span className="small_header px-2">Duration: </span>{" "}
                        <span className="px-3">{booking.trek.duration} </span>
                      </h5>
                      <h5>
                        <span className="small_header px-2">location: </span>{" "}
                        <span className="px-3">{booking.trek.location}</span>
                      </h5>
                      <h5>
                        <span className="small_header px-2">
                          no of people:{" "}
                        </span>{" "}
                        <span className="px-3">
                          {booking.personcount} people{" "}
                        </span>
                      </h5>
                      <h5>
                        <span className="small_header px-2">status: </span>{" "}
                        <span className="px-3">{booking.status}</span>
                      </h5>
                      <div className="h1_book_now px-3">
                        <h1>${booking.trek.price}</h1>
                      </div>
                    </div>
                  </Singletreckingview>
                )}
                {booking.hotel != null && (
                  <Singletreckingview className="my-3">
                    <div className="bg-training p-3 singletreckingview_inside">
                      <h3>{booking.hotel.name}</h3>
                      <h5>
                        <span className="small_header px-2">location: </span>{" "}
                        {booking.hotel.location}
                      </h5>
                      <h5>
                        <span className="small_header px-2">status: </span>{" "}
                        <span className="px-3">{booking.status}</span>
                      </h5>
                      {/* <h2>$220 per person</h2> */}
                      <div className="h1_book_now px-3">
                        <h1>${booking.price}</h1>
                      </div>
                    </div>
                  </Singletreckingview>
                )}

                {booking.activity != null && (
                  <Singletreckingview className="my-3">
                    <div className="bg-training p-2 singletreckingview_inside">
                      {/* <img
                  src="https://images.unsplash.com/photo-1594568284297-7c64464062b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8MTYlM0E5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  className="w-100"
                /> */}
                      <h3>{booking.activity.activitname}</h3>
                      <p>{booking.activity.description}</p>
                      <h5>
                        <span className="small_header px-2">location: </span>
                        <span className="px-2">
                          {booking.activity.location}{" "}
                        </span>
                      </h5>
                      <h5>
                        <span className="small_header px-2">status: </span>{" "}
                        <span className="px-3">{booking.status}</span>
                      </h5>
                      <div className="h1_book_now px-3">
                        <h1>${booking.price}</h1>
                      </div>
                    </div>
                  </Singletreckingview>
                )}
              </div>
            );
          })}
        </div>

        <Padding></Padding>
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
  .send_button {
    background-color: #3d5a80;
    color: white;
    border-radius: 15px;
  }
`;
const Singletreckingview = styled.div`
  .singletreckingview_inside {
    border: 3px solid #293241;
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
    border: 3x solid #293241;
    border-radius: 15px;
    height: 30px;
    width: 90px;
  }
`;

const Padding = styled.div`
  height: 60px;
`;

export default Profile;
