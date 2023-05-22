import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import Navbar from "../Components/Navbar/Navbar";

import { useNavigate } from "react-router-dom";

const get_all_treckings = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/trek/get/all`
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
  const {
    data: treckings,
    isLoading: alltreckingsloading,
    refetch: refetchalltreckings,
  } = useQuery("get_all_training", () => get_all_treckings(), {
    refetchOnMount: false,
    refetchInterval: 5000,
  });

  console.log(treckings);
  // const {
  //   data: allcoaches,
  //   isLoading: allcoachesloading,
  //   refetch: refetchallcoaches,
  // } = useQuery("get_all_coaches", () => getallcoachesfunc(), {
  //   refetchOnMount: false,
  //   refetchInterval: 5000,
  // });
  const navigate = useNavigate();
  const gotobooking = (treckid) => {
    navigate("/booking/" + treckid);
  };

  // let [treckings, setTreckings] = useState([1, 2, 3, 4]);
  if (alltreckingsloading) return "...loading";
  return (
    <Userhome>
      <Navbar />
      <div className="container py-5">
        <h1 className="heading px-5 py-2">Choose your trecking location</h1>

        <div className="row">
          {treckings?.map((t) => {
            return (
              <>
                <Singletreckingview className="col-lg-4 p-2">
                  <div className="bg-training p-3 singletreckingview_inside">
                    <img src={t.image} className="w-100" />

                    <h3>{t.treckname}</h3>
                    <h5>
                      <span className="small_header px-2 mx-2">Duration: </span>
                      {t.duration}
                    </h5>
                    <h5>
                      <span className="small_header px-2 mx-2">location: </span>
                      {t.location}
                    </h5>
                    <p>{t.description}</p>
                    <h2>{t.price} per person</h2>
                    <div
                      className="h1_book_now px-3 cursor_pointer"
                      onClick={() => gotobooking(t.trekid)}
                    >
                      <h1>BOOK NOW</h1>
                    </div>
                  </div>
                </Singletreckingview>
              </>
            );
          })}
        </div>

        <h1 className="heading px-5 py-2">Choose your seasonal trecks</h1>
        <div id = "seasonaltrecks" className="row">
          {treckings?.map((t) => {
            return (
              <>
                {t.tags != null && (
                  <Singletreckingview className="col-lg-4 p-2">
                    <div className="bg-training p-3 singletreckingview_inside">
                      <img src={t.image} className="w-100" />

                      <h3>{t.treckname}</h3>
                      <h5>
                        <span className="small_header px-2 mx-2">
                          Duration:{" "}
                        </span>
                        {t.duration}
                      </h5>
                      <h5>
                        <span className="small_header px-2 mx-2">
                          location:{" "}
                        </span>
                        {t.location}
                      </h5>
                      <h5>
                        <span className="small_header px-2 mx-2">
                          tags:{" "}
                        </span>
                        {t.tags}
                      </h5>
                      <p>{t.description}</p>
                      <h2>{t.price} per person</h2>
                      <div
                        className="h1_book_now px-3 cursor_pointer"
                        onClick={() => gotobooking(t.trekid)}
                      >
                        <h1>BOOK NOW</h1>
                      </div>
                    </div>
                  </Singletreckingview>
                )}
              </>
            );
          })}
        </div>

        <hr />

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
