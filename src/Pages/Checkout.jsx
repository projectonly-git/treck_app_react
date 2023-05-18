import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import Navbar from "../Components/Navbar/Navbar";

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

function Checkout(props) {
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

  let [hotels, setHotels] = useState([1, 2, 3, 4]);
  return (
    <Userhome>
      <Navbar />
      <div className="container py-5">
        <h1 className="heading px-5 py-2">Choose your trecking location</h1>

        <div className="row py-3">
          <div className="col-lg-6">
            <Singletreckingview className="">
              <div className="bg-training p-3 singletreckingview_inside">
                <h3>Kedarnath treck</h3>
                <h5>
                  <span className="small_header px-2">Duration: </span>4 days
                </h5>
                <h5>
                  <span className="small_header px-2">location: </span>kashmir
                </h5>
                <div className="h1_book_now px-3">
                  <h1>$2200</h1>
                </div>
              </div>
            </Singletreckingview>
            <Singletreckingview className="my-3">
              <div className="bg-training p-3 singletreckingview_inside">
                <h3>Kedarnath treck</h3>
                <h5>
                  <span className="small_header px-2">Duration: </span>4 days
                </h5>
                <h5>
                  <span className="small_header px-2">location: </span>kashmir
                </h5>
                <h2>$220 per person</h2>
                <div className="h1_book_now px-3">
                  <h1>$2300</h1>
                </div>
              </div>
            </Singletreckingview>
          </div>
          <div className="col-lg-6">
            <Singletreckingview className="">
              <div className="bg-training p-3 singletreckingview_inside">
                <h3>Total Payable</h3>
                <div className="h1_book_now px-3">
                  <h1>$2300</h1>
                </div>
                <h3>Choose Your Payment Method</h3>
                <div className=" mx-2 input_no_of_people_out">
                  <select className="input_no_of_people_in h4 px-3">
                    <option value="card">credit card / debit card</option>
                    <option value="upi">UPI</option>
                    <option value="cash">Cash</option>
                  </select>
                </div>
                <div className="h1_book_now px-3">
                  <h1>PAY NOW</h1>
                </div>
              </div>
            </Singletreckingview>
          </div>
        </div>

        <hr />
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
    height: 50px;
    width: 100%;
  }
`;

export default Checkout;
