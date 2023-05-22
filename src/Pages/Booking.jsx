import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import Navbar from "../Components/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
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

const getallHotels = async (treckid) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/home/get/hotel/${treckid}`
  );
  return response.data;
};
const getallreviews = async (treckid) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/home/trek/reviews/${treckid}`
  );
  return response.data;
};
const getallActivity = async (treckid) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/home/get/activity/${treckid}`
  );
  return response.data;
};

const Texttoshow = (props) => {
  if (props.hindex === props.index) {
    return "you chosed it";
  } else {
    return "select it";
  }
};

const Rating = (props) => {
  if (props.starselect === 0) {
    return (
      <div className="star d-flex flex-row my-2">
        <div>
          <i
            className="fa fa-star-o fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(1)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star-o fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(2)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star-o fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(3)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star-o fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(4)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star-o fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(5)}
          ></i>
        </div>
      </div>
    );
  }
  if (props.starselect === 1) {
    return (
      <div className="star d-flex flex-row my-2">
        <div>
          <i
            className="fa fa-star-o fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(1)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star-o fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(2)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star-o fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(3)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star-o fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(4)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star-o fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(5)}
          ></i>
        </div>
      </div>
    );
  }
  if (props.starselect === 2) {
    return (
      <div className="star d-flex flex-row my-2">
        <div>
          <i
            className="fa fa-star fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(1)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(2)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star-o fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(3)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star-o fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(4)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star-o fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(5)}
          ></i>
        </div>
      </div>
    );
  }
  if (props.starselect === 3) {
    return (
      <div className="star d-flex flex-row my-2">
        <div>
          <i
            className="fa fa-star fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(1)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(2)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(3)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star-o fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(4)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star-o fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(5)}
          ></i>
        </div>
      </div>
    );
  }

  if (props.starselect === 4) {
    return (
      <div className="star d-flex flex-row my-2">
        <div>
          <i
            className="fa fa-star fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(1)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(2)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(3)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(4)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star-o fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(5)}
          ></i>
        </div>
      </div>
    );
  }

  if (props.starselect === 5) {
    return (
      <div className="star d-flex flex-row my-2">
        <div>
          <i
            className="fa fa-star fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(1)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(2)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(3)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(4)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={() => props.updatestarselect(5)}
          ></i>
        </div>
      </div>
    );
  } else {
    return (
      <div className="star d-flex flex-row my-2">
        <div>
          <i
            className="fa fa-star fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={props.updatestarselect(1)}
          ></i>
        </div>
        <div>
          <i
            className="fa fa-star fa-2x cursor_pointer"
            aria-hidden="true"
            onClick={props.updatestarselect(2)}
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
    );
  }
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function Booking(props) {
  const navigate = useNavigate();
  const { treckid } = useParams();
  let [trek, setTrek] = useState({});
  let [booking, setBooking] = useState({});
  let [hindex, setHindex] = useState(-1);
  let [aindex, setAindex] = useState(-1);

  let [starselect, setStarselect] = useState(1);
  let [reviewdescription, setReviewdescription] = useState(" ");

  const setreviewdesc = (event) => {
    console.log(event.target.value);
    setReviewdescription(event.target.value);
  };
  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + "/trek/get/" + treckid).then(
      (response) => {
        console.log(response.data);
        setTrek(response.data);
        booking.trek = response.data;
        booking.personcount = 1;
        setBooking(booking);
      },
      (error) => {}
    );
  }, []);

  const updatestarselect = (star) => {
    setStarselect(star);
  };

  //++++++++++++++ update the person count ++++++++++
  const updateBooking = (event) => {
    let val = event.target.value;
    let name = event.target.name;
    if (name === "personcount") {
      booking.personcount = val;
      setBooking(booking);
    }
    if (name === "startdate") {
      booking.startdate = val;
      setBooking(booking);
    }
    if (name === "enddate") {
      booking.enddate = val;
      setBooking(booking);
    }
  };

  // ++++++ fetch all hotels for that treck +++++++++++
  const {
    data: allHotels,
    isLoading: allHotelsloading,
    refetch: refetchallHotels,
  } = useQuery("get_all_hotels", () => getallHotels(treckid), {
    refetchOnMount: false,
    refetchInterval: 5000,
  });

  const {
    data: allActivity,
    isLoading: allActivityL,
    refetch: allActivityR,
  } = useQuery("get_all_activity", () => getallActivity(treckid), {
    refetchOnMount: false,
    refetchInterval: 5000,
  });

  const {
    data: allreviews,
    isLoading: allreviewsL,
    refetch: allreviewsF,
  } = useQuery("get_all_reviews", () => getallreviews(treckid), {
    refetchOnMount: false,
    refetchInterval: 5000,
  });

  const postReview = () => {
    const review = {
      rating: starselect,
      description: reviewdescription,
      trek: {
        trekid: treckid,
      },
    };
    console.log(review);
    console.log("_____________________________________________________");
    axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "/home/review/trek/" + treckid,
        review
      )
      .then(
        (response) => {
          console.log(response.data);
          if (response.data == 200) {
            toast.success("Thank you for the review", {
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
  };

  // +++++++ update the hotels for that trek ++++++
  const setHotels = (index, hotel) => {
    booking.hotel = hotel;
    setBooking(booking);
    setHindex(index);
  };

  const aetActivityCount = (index, activity) => {
    booking.activity = activity;
    setBooking(booking);
    setAindex(index);
  };

  const gotocheckout = () => {
    navigate("/checkout", { state: booking });
  };

  if (allHotelsloading) return "loading...";
  return (
    <Userhome>
      <ToastContainer />
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
                <h3>{trek.treckname}</h3>
                <p>{trek.description}</p>
                <h5>
                  <span className="small_header px-2">Duration: </span>{" "}
                  {trek.duration}
                </h5>
                <h5>
                  <span className="small_header px-2">location: </span>
                  {trek.location}
                </h5>

                <h2>${trek.price} per person</h2>
                <div className="d-flex flex-row my-2">
                  <div className="small_header px-2 h5">No of persons: </div>
                  <div className=" mx-2 px-2 input_no_of_people_out">
                    <input
                      type="number"
                      className="input_no_of_people_in h4 px-3"
                      placeholder="1"
                      name="personcount"
                      onChange={updateBooking}
                    />
                  </div>
                </div>

                <div className="d-flex flex-row my-2">
                  <div className="small_header px-2 h5">startdate: </div>
                  <div className=" mx-2 px-2 input_no_of_people_out">
                    <input
                      type="date"
                      className="start_date_end_date p-small px-3"
                      placeholder="choose start date"
                      name="startdate"
                      onChange={updateBooking}
                    />
                  </div>
                </div>
                <div className="d-flex flex-row my-2">
                  <div className="small_header px-2 h5">enddate: </div>
                  <div className=" mx-2 px-2 input_no_of_people_out">
                    <input
                      type="date"
                      className="start_date_end_date p-small px-3"
                      placeholder="choose start date"
                      name="enddate"
                      onChange={updateBooking}
                    />
                  </div>
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
          {allHotels?.map((hotel, index) => {
            return (
              <>
                <Singletreckingview className="col-lg-4">
                  <div className="bg-training p-2 singletreckingview_inside">
                    <img
                      src="https://images.unsplash.com/photo-1594568284297-7c64464062b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8MTYlM0E5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                      className="w-100"
                    />
                    <h3>{hotel.name}</h3>
                    <h5>
                      <span className="small_header px-2">location: </span>
                      <span className="px-2">{hotel.location} </span>
                    </h5>
                    <h2>${hotel.price} per night</h2>
                    <div
                      className="h1_book_now px-3 cursor_pointer"
                      onClick={() => setHotels(index, hotel)}
                    >
                      <h1>
                        <Texttoshow hindex={hindex} index={index} />
                      </h1>
                    </div>
                  </div>
                </Singletreckingview>
              </>
            );
          })}
        </div>

        <h1 className="heading px-5 py-2 my-3">
          Choose your preferred Activity for this trecking
        </h1>
        <div className="row">
          {allActivity?.map((activity, index) => {
            return (
              <>
                <Singletreckingview className="col-lg-4">
                  <div className="bg-training p-2 singletreckingview_inside">
                    <img
                      src="https://images.unsplash.com/photo-1594568284297-7c64464062b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8MTYlM0E5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                      className="w-100"
                    />
                    <h3>{activity.activitname}</h3>
                    <p>{activity.description}</p>
                    <h5>
                      <span className="small_header px-2">location: </span>
                      <span className="px-2">{activity.location} </span>
                    </h5>
                    <h2>${activity.price} per night</h2>
                    <div
                      className="h1_book_now px-3 cursor_pointer"
                      onClick={() => aetActivityCount(index, activity)}
                    >
                      <h1>
                        <Texttoshow hindex={aindex} index={index} />
                      </h1>
                    </div>
                  </div>
                </Singletreckingview>
              </>
            );
          })}
        </div>

        <h1 className="heading px-5 py-2 my-3" onClick={() => setStarselect(2)}>
          Leave A Review For This Trecking
        </h1>

        <div className="d-flex flex-row justify-content-between align-items-center">
          <Rating starselect={starselect} updatestarselect={updatestarselect} />
          <div
            className="h3 cursor_pointer send_button p-2"
            onClick={postReview}
          >
            post <i class="fa fa-paper-plane" aria-hidden="true"></i>
          </div>
        </div>

        <textarea
          type="text"
          className="leave_comment p-2"
          name="myTextarea"
          id="myTextarea"
          rows="4"
          cols="50"
          placeholder="enter your review"
          onChange={setreviewdesc}
        ></textarea>

        <h1 className="heading px-5 py-2 my-3">
          Read What Our Users Say About This Trip
        </h1>
        <div className="row">
          {allreviews?.map((r) => {
            return (
              <>
                <Singletreckingview className="col-lg-4 p-2">
                  <div className="bg-training p-3 singletreckingview_inside">
                    <div className="d-flex flex-row justify-content-between">
                      <h3>anonymus</h3>
                      <h3>
                        {r.rating} <i class="fa fa-star" aria-hidden="true"></i>
                      </h3>
                    </div>
                    <p>{r.description}</p>
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
  .start_date_end_date {
    width: 100%;
    background-color: #e0fbfc;
    border: 3x solid #293241;
    border-radius: 15px;
    height: 30px;
  }
`;

const Padding = styled.div`
  height: 60px;
`;

export default Booking;
