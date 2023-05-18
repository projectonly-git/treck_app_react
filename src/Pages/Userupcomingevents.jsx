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

function Userupcomingevents(props) {
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
  const navigate = useNavigate();
  const gotobooking = () => {
    navigate("/booking");
  };

  let [treckings, setTreckings] = useState([1, 2, 3, 4]);
  return (
    <Userhome>
      <Navbar />
      <div className="container py-5">
        <h1 className="heading px-5 py-2">Choose your trecking location</h1>

        <div className="row">
          {treckings.map((t) => {
            return (
              <>
                <Singletreckingview className="col-lg-4 p-2">
                  <div className="bg-training p-3 singletreckingview_inside">
                    <img
                      src="https://images.unsplash.com/photo-1594568284297-7c64464062b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8MTYlM0E5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                      className="w-100"
                    />

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
                    <div
                      className="h1_book_now px-3 cursor_pointer"
                      onClick={() => gotobooking()}
                    >
                      <h1>BOOK NOW</h1>
                    </div>
                  </div>
                </Singletreckingview>
              </>
            );
          })}
        </div>

        <hr />
        <h1>Your coach booking</h1>

        {/* {allcoaches.map((c) => {
          if (c.coach_id == localStorage.getItem("coachbooking")) {
            return (
              <>
                <Outersectionsingletrainingview>
                  <div className="bg-training p-3 ">
                    <h3>
                      <u>coach name: </u>
                      {c.user.name}
                    </h3>
                    <h5>
                      <u>contacts: </u>
                      {c.user.email}
                    </h5>{" "}
                  </div>
                </Outersectionsingletrainingview>
              </>
            );
          }
        })} */}
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
`;
const Singletreckingview = styled.div`
  .singletreckingview_inside {
    border: 5px solid #293241;
    border-radius: 20px;
  }
  .bg-training {
    background-color: #e0fbfc;
    margin: 10px;
  }
  .small_header {
    background-color: #ee6c4d;
    border-radius: 10px;
  }
  .h1_book_now {
    background-color: #293241;
    color: #ee6c4d;
  }
`;

export default Userupcomingevents;
