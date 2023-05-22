import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import Navbar from "../Components/Navbar/Navbar";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const location = useLocation();
  const booking = location.state;
  let [totalprice1, setTotalprice1] = useState(
    booking.trek.price * booking.personcount
  );
  let [totalprice2, setTotalprice2] = useState(0);
  let [totalprice3, setTotalprice3] = useState(0);

  useEffect(() => {
    const updatehotel1 = () => {
      if (booking.hotel != undefined) {
        setTotalprice2(booking.hotel.price);
      }
      if (booking.activity != undefined) {
        setTotalprice3(booking.activity.price);
      }
    };
    updatehotel1();
  }, []);

  const sendRequest = () => {
    console.log(booking);

    let user_id = localStorage.getItem("id");

    let oredrst = {
      price: booking.trek.price * booking.personcount,
      status: "pending",
      trek: {
        trekid: booking.trek.trekid,
      },
      user: {
        userid: user_id,
      },
      fromDate: booking.startdate,
      toDate: booking.enddate,
      count: booking.personcount,
    };

    console.log(oredrst);
    axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "/home/order/" + user_id,
        oredrst
      )
      .then(
        (response) => {
          console.log(response.data);
          if (response.data == 200) {
            toast.success("order placed", {
              position: "top-right",
              autoClose: 2000,
            });
          } else if (response.data == 400) {
            toast.error("Email already present! try login", {
              position: "top-right",
              autoClose: 2000,
            });
          }
        },
        (error) => {}
      );

    if (booking.hotel !== undefined) {
      let oredrsh = {
        price: booking.hotel.price,
        status: "pending",
        hotel: {
          hotelid: booking.hotel.hotelid,
        },
        user: {
          userid: user_id,
        },
        count: booking.personcount,
        fromDate: booking.startdate,
        toDate: booking.enddate,
      };
      axios
        .post(
          process.env.REACT_APP_BACKEND_URL + "/home/order/" + user_id,
          oredrsh
        )
        .then(
          (response) => {
            console.log(response.data);
            if (response.data == 200) {
              toast.success("order placed", {
                position: "top-right",
                autoClose: 2000,
              });
            } else if (response.data == 400) {
              toast.error("Email already present! try login", {
                position: "top-right",
                autoClose: 2000,
              });
            }
          },
          (error) => {}
        );
    }

    if (booking.activity !== undefined) {
      let oredrsa = {
        price: booking.activity.price,
        status: "pending",
        activity: {
          activityid: booking.activity.activityid,
        },
        user: {
          userid: user_id,
        },
        fromDate: booking.startdate,
        toDate: booking.enddate,
        count: booking.personcount,
      };
      axios
        .post(
          process.env.REACT_APP_BACKEND_URL + "/home/order/" + user_id,
          oredrsa
        )
        .then(
          (response) => {
            console.log(response.data);
            if (response.data == 200) {
              toast.success("order placed", {
                position: "top-right",
                autoClose: 2000,
              });
            } else if (response.data == 400) {
              toast.error("Email already present! try login", {
                position: "top-right",
                autoClose: 2000,
              });
            }
          },
          (error) => {}
        );
    }
  };

  console.log(booking);

  let [hotels, setHotels] = useState([1, 2, 3, 4]);
  return (
    <Userhome>
      <ToastContainer />

      <Navbar />
      <div className="container py-5">
        <h1 className="heading px-5 py-2">Go on your dream vacation</h1>

        <div className="row py-3">
          <div className="col-lg-6">
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
                  <span className="small_header px-2">no of people: </span>{" "}
                  <span className="px-3">{booking.personcount} people </span>
                </h5>
                <div className="h1_book_now px-3">
                  <h1>${totalprice1}</h1>
                </div>
              </div>
            </Singletreckingview>
            {booking.hotel != null && (
              <Singletreckingview className="my-3">
                <div className="bg-training p-3 singletreckingview_inside">
                  <h3>{booking.hotel.name}</h3>
                  <h5>
                    <span className="small_header px-2">location: </span>{" "}
                    {booking.hotel.location}
                  </h5>
                  {/* <h2>$220 per person</h2> */}
                  <div className="h1_book_now px-3">
                    <h1>${totalprice2}</h1>
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
                    <span className="px-2">{booking.activity.location} </span>
                  </h5>
                  <div className="h1_book_now px-3">
                    <h1>${totalprice3}</h1>
                  </div>
                </div>
              </Singletreckingview>
            )}
          </div>
          <div className="col-lg-6">
            <Singletreckingview className="">
              <div className="bg-training p-3 singletreckingview_inside">
                <h3>Total Payable</h3>
                <div className="h1_book_now px-3">
                  <h1>${totalprice1 + totalprice2 + totalprice3}</h1>
                </div>
                <h3>Choose Your Payment Method</h3>
                <div className=" mx-2 input_no_of_people_out">
                  <select className="input_no_of_people_in h4 px-3">
                    <option value="card">credit card / debit card</option>
                    <option value="upi">UPI</option>
                    <option value="cash">Cash</option>
                  </select>
                </div>
                <div className="h1_book_now px-3" onClick={sendRequest}>
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
