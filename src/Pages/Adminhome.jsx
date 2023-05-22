import React, { useState } from "react";
import "../Assets/Common.css";
import styled from "styled-components";
import { useQuery } from "react-query";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "./Footer";

const Showbookingdateandtime = ({ booking }) => {
  if (booking.bookingdate === "none" && booking.bookingtime === "none") {
    return <></>;
  } else if (booking.bookingdate != "none" && booking.bookingtime != "none") {
    return (
      <>
        <h6>
          The current booking date is{" "}
          <span style={{ color: "#34bbcc" }}>{booking.bookingdate}</span> and
          time is
          <span style={{ color: "#34bbcc" }} className="px-2">
            {booking.bookingtime}
          </span>{" "}
        </h6>
      </>
    );
  }
};

const Singlecoachview = ({ coach }) => {
  const deletecoach = (pid) => {
    axios.get(process.env.REACT_APP_BACKEND_URL + "/coach/delete/" + pid).then(
      (response) => {
        //console.log(response.data);
      },
      (error) => {
        //console.log("some error");
      }
    );
  };
  return (
    <>
      <Outersectionsinglecoachview>
        <div className="bg-coach p-3 ">
          <h2>{coach.user.name}</h2>
          <h6>{coach.user.email}</h6>
          <div
            className="cursor_pointer"
            onClick={() => deletecoach(coach.coach_id)}
          >
            <h3 className="w-100 book-now-coach text-center">delete</h3>
          </div>
        </div>
      </Outersectionsinglecoachview>
    </>
  );
};

const Singleplayerview = ({ player }) => {
  const deleteplayer = (pid) => {
    axios.get(process.env.REACT_APP_BACKEND_URL + "/player/delete/" + pid).then(
      (response) => {
        //console.log(response.data);
      },
      (error) => {
        //console.log("some error");
        toast.error("this player can not be deleted", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    );
  };
  return (
    <>
      <Outersectionsinglecoachview>
        <div className="bg-coach p-3 ">
          <h2>{player.player_id}</h2>
          <h2>{player.user.name}</h2>
          <h6>{player.user.email}</h6>
          <div
            className="cursor_pointer"
            onClick={() => deleteplayer(player.pid)}
          >
            <h3 className="w-100 book-now-coach text-center">delete</h3>
          </div>
        </div>
      </Outersectionsinglecoachview>
    </>
  );
};

//__________________ Add a new activity _____________________________

const Addactivity = () => {
  const [activity, setActivity] = useState({
    name: "",
    location: "",
    description: "",
    price: "",
  });

  const updatedetails = (event) => {
    const { name, value } = event.target;
    setActivity((prevObject) => ({
      ...prevObject,
      [name]: value,
    }));
    //console.log(training);
  };
  const addtreck = () => {
    let activity1 = {
      activitname: activity.name,
      location: activity.location,
      description: activity.description,
      price: activity.price,
    };
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/activity/add", activity1)
      .then(
        (response) => {
          console.log(response.data);
          if (response.data == 200) {
            toast.success("treck saved sucessfully", {
              position: "top-right",
              autoClose: 2000,
            });
          }
        },
        (error) => {}
      );
  };

  return (
    <div className="container">
      <Addplayerview className="mt-5">
        <h1>Add a new activity</h1>
        <div class="row">
          <div className="col-lg-3 col-12">
            <input
              type="text"
              placeholder="enter treck name"
              className="px-2 input_box w-100"
              name="name"
              onChange={updatedetails}
            />
          </div>

          <div className="col-lg-3 col-12">
            <input
              type="text"
              placeholder="enter track location"
              className="px-3 input_box w-100"
              name="location"
              onChange={updatedetails}
            />
          </div>
          <div className="col-lg-3 col-12">
            <input
              type="number"
              placeholder="enter price per person"
              className="px-3 input_box w-100"
              name="price"
              onChange={updatedetails}
            />
          </div>

          <div className="col-lg-12 mt-3">
            <textarea
              className="leave_comment p-2"
              name="description"
              id="myTextarea"
              rows="4"
              cols="50"
              placeholder="enter description for this trecking"
              onChange={updatedetails}
            ></textarea>
          </div>

          <div className="col-lg-4 col-12">
            <input
              type="submit"
              value="add new trecking"
              name="password col-lg-4 col-12"
              className="px-3 btn btn-primary"
              onClick={() => addtreck()}
            />
          </div>
        </div>
      </Addplayerview>
      <div className="row"></div>
    </div>
  );
};
//__________________ Add a new trecking_____________________________
const get_all_treckings = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/trek/get/all`
  );
  return response.data;
};
const Addtrecking = () => {
  const [treck, setTreck] = useState({
    name: "",
    duration: "",
    location: "",
    description: "",
    price: "",
  });

  const {
    data: treckings,
    isLoading: alltreckingsloading,
    refetch: refetchalltreckings,
  } = useQuery("get_all_training", () => get_all_treckings(), {
    refetchOnMount: false,
    refetchInterval: 5000,
  });

  const updatedetails = (event) => {
    const { name, value } = event.target;
    setTreck((prevObject) => ({
      ...prevObject,
      [name]: value,
    }));
    //console.log(training);
  };
  const addtreck = () => {
    let treck1 = {
      treckname: treck.name,
      duration: treck.duration,
      location: treck.location,
      description: treck.description,
      price: treck.price,
    };
    axios.post(process.env.REACT_APP_BACKEND_URL + "/trek/add", treck1).then(
      (response) => {
        console.log(response.data);
        if (response.data == 200) {
          toast.success("treck saved sucessfully", {
            position: "top-right",
            autoClose: 2000,
          });
        }
      },
      (error) => {}
    );
  };

  return (
    <div className="container">
      <Addplayerview className="mt-5">
        <h1>Add a new trecking path</h1>
        <div class="row">
          <div className="col-lg-3 col-12">
            <input
              type="text"
              placeholder="enter treck name"
              className="px-2 input_box w-100"
              name="name"
              onChange={updatedetails}
            />
          </div>

          <div className="col-lg-3 col-12">
            <input
              type="text"
              placeholder="enter treck duration"
              className="px-3 input_box w-100"
              name="duration"
              onChange={updatedetails}
            />
          </div>

          <div className="col-lg-3 col-12">
            <input
              type="text"
              placeholder="enter track location"
              className="px-3 input_box w-100"
              name="location"
              onChange={updatedetails}
            />
          </div>
          <div className="col-lg-3 col-12">
            <input
              type="number"
              placeholder="enter price per person"
              className="px-3 input_box w-100"
              name="price"
              onChange={updatedetails}
            />
          </div>

          <div className="col-lg-12 mt-3">
            <textarea
              className="leave_comment p-2"
              name="description"
              id="myTextarea"
              rows="4"
              cols="50"
              placeholder="enter description for this trecking"
              onChange={updatedetails}
            ></textarea>
          </div>

          <div className="col-lg-4 col-12">
            <input
              type="submit"
              value="add new trecking"
              name="password col-lg-4 col-12"
              className="px-3 btn btn-primary"
              onClick={() => addtreck()}
            />
          </div>
        </div>

        <div className="row">
          {treckings?.map((t) => {
            return (
              <>
                <Singletreckingview className="col-lg-4 p-2">
                  <div className="bg-training p-3 singletreckingview_inside">
                    <img
                      src="https://images.unsplash.com/photo-1594568284297-7c64464062b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8MTYlM0E5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                      className="w-100"
                    />

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
                  </div>
                </Singletreckingview>
              </>
            );
          })}
        </div>
      </Addplayerview>
    </div>
  );
};

//__________________ Add a new Hotel _____________________________

const Postnewhotels = () => {
  const [hotel, setHotel] = useState({
    name: "",
    image: "",
    location: "",
    price: "",
  });

  const updatedetails = (event) => {
    const { name, value } = event.target;
    setHotel((prevObject) => ({
      ...prevObject,
      [name]: value,
    }));
    console.log(hotel);
  };
  const addHotel = () => {
    axios.post(process.env.REACT_APP_BACKEND_URL + "/hotel/add", hotel).then(
      (response) => {
        console.log(response.data);
        if (response.data == 200) {
          toast.success("Hotel saved sucessfully", {
            position: "top-right",
            autoClose: 2000,
          });
        }
      },
      (error) => {}
    );
  };

  return (
    <div className="container">
      <Addplayerview className="mt-5">
        <h1>Add a new trecking path</h1>
        <div class="row">
          <div className="col-lg-3 col-12">
            <input
              type="text"
              placeholder="enter hotel name"
              className="px-2 input_box w-100"
              name="name"
              onChange={updatedetails}
            />
          </div>

          <div className="col-lg-3 col-12">
            <input
              type="text"
              placeholder="enter a image link"
              className="px-3 input_box w-100"
              name="image"
              onChange={updatedetails}
            />
          </div>

          <div className="col-lg-3 col-12">
            <input
              type="text"
              placeholder="enter hotel location"
              className="px-3 input_box w-100"
              name="location"
              onChange={updatedetails}
            />
          </div>
          <div className="col-lg-3 col-12">
            <input
              type="number"
              placeholder="enter hotel price per night"
              className="px-3 input_box w-100"
              name="price"
              onChange={updatedetails}
            />
          </div>

          <div className="col-lg-4 col-12 my-2">
            <input
              type="submit"
              value="add new hotel"
              name="password col-lg-4 col-12"
              className="px-3 btn btn-primary"
              onClick={() => addHotel()}
            />
          </div>
        </div>
      </Addplayerview>
    </div>
  );
};

//______________ See all registered users________________________________
const getallusersfunc = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/users/get/all`
  );
  return response.data;
};
const Seeallusers = () => {
  const {
    data: users,
    isLoading: allUsersLoading,
    refetch: refetchAllUsers,
  } = useQuery("get_all_coaches", () => getallusersfunc(), {
    refetchOnMount: false,
    refetchInterval: 5000,
  });

  ////console.log(allcoaches)

  if (allUsersLoading) {
    return "loading";
  }
  return (
    <div className="container">
      <div className="row container">
        {users?.map((u, index) => (
          <div className="col-lg-4  col-sm-6 col-12 my-2" key={index}>
            <Singleplayer className="p-2">
              <h1>emailid:</h1>
              <p>{u.username}</p>
              <h5>username</h5>
              <p>{u.name}</p>
            </Singleplayer>
          </div>
        ))}
      </div>
    </div>
  );
};

//_____________________ see all requests __________________________________________
const getallpendingrequestfunc = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/orders/get/all`
  );
  return response.data;
};
const Approvetreckrequests = () => {
  // let [allpendingrequest, setAllpendingrequest] = useState([1, 2, 3, 4]);
  const {
    data: allpendingrequest,
    isLoading: allpendingrequestloading,
    refetch: refetchallpendingrequest,
  } = useQuery("get_all_allpendingrequest", () => getallpendingrequestfunc(), {
    refetchOnMount: false,
    refetchInterval: 5000,
  });
  console.log(allpendingrequest);

  const approve = (coachbookid) => {
    // axios
    //   .post(
    //     process.env.REACT_APP_BACKEND_URL +
    //       "/admin/approvePersonalCoachRequest/" +
    //       coachbookid
    //   )
    //   .then(
    //     (response) => {
    //       //console.log(response);
    //       refetchallpendingrequest();
    //       /*toast.success("approved the coach requests", {
    //         position: toast.POSITION.TOP_RIGHT,
    //       });*/
    //     },
    //     (error) => {}
    //   );
  };

  if (allpendingrequestloading) return "loading";
  return (
    <Approvecoach className="container">
      <div className="row">
        {allpendingrequest.map((booking, index) => {
          return (
            <>
              <div className=" col-lg-4 my-2 ">
                <Singletreckingview className="singletreckingview_inside">
                  {booking.trek != null && (
                    <div className="">
                      <div className="bg-training p-3 ">
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
                        <div className="h1_book_now px-3">
                          <h1>${booking.trek.price}</h1>
                        </div>
                      </div>
                    </div>
                  )}
                  {booking.hotel != null && (
                    <div className="my-3">
                      <div className="bg-training p-3 ">
                        <h3>{booking.hotel.name}</h3>
                        <h5>
                          <span className="small_header px-2">location: </span>{" "}
                          {booking.hotel.location}
                        </h5>
                        {/* <h2>$220 per person</h2> */}
                        <div className="h1_book_now px-3">
                          <h1>${booking.price}</h1>
                        </div>
                      </div>
                    </div>
                  )}

                  {booking.activity != null && (
                    <div className="my-3">
                      <div className="bg-training p-2">
                        <h3>{booking.activity.activitname}</h3>
                        <p>{booking.activity.description}</p>
                        <h5>
                          <span className="small_header px-2">location: </span>
                          <span className="px-2">
                            {booking.activity.location}{" "}
                          </span>
                        </h5>
                        <div className="h1_book_now px-3">
                          <h1>${booking.price}</h1>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="px-2">
                    <h5>
                      <span className="small_header px-2">userid: </span>
                      <span className="px-2">{booking.user.username} </span>
                    </h5>
                    <h5>
                      <span className="small_header px-2">username: </span>
                      <span className="px-2">{booking.user.name} </span>
                    </h5>
                    {booking.status == "pending" && (
                      <div className="h1_book_now_invert px-3 cursor_pointer">
                        <h1>approve</h1>
                      </div>
                    )}
                  </div>
                </Singletreckingview>
              </div>
            </>
          );
        })}
      </div>
    </Approvecoach>
  );
};

//_________________________________________________________________

const Returncomponentbasedonchoose = ({ choose, user }) => {
  if (choose === 0) {
    return <Addtrecking />;
  }
  if (choose === 1) {
    return <Seeallusers />;
  }
  if (choose === 2) {
    return <Approvetreckrequests />;
  }
  if (choose === 3) {
    return <Postnewhotels />;
  }
  if (choose === 4) {
    return <Addactivity />;
  }
};

//+++++++++++++++++++++++++++++++++++++++++++   Main Home Page For Admin Functionalities   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function Adminhome({ user }) {
  const [choose, setChoose] = useState(0);
  console.warn = function () {};
  let actions = [
    "Add New Trecking",
    "See All Users",
    "Approve treck requests",
    "Post New Hotels",
    "Add activity",
  ];
  return (
    <>
      <ToastContainer />

      <Outsideadminhome>
        <Navbar user={user} />
        <div className="">
          <div className="container d-flex flex-row my-3">
            {actions.map((action, index) => (
              <div
                className=" singletimeslot mx-2 p-2 h6 cursor_pointer"
                style={{
                  backgroundColor: choose === index ? "red" : "#38bacf",
                }}
                onClick={() => setChoose(index)}
              >
                {action}
              </div>
            ))}
          </div>
          <Returncomponentbasedonchoose choose={choose} user={user} />
        </div>
        <Extrapaddingforbottom></Extrapaddingforbottom>
        <Footer />
      </Outsideadminhome>
    </>
  );
}

const Admin_view_schedule_traing_season = styled.div`
  .overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: grey;
    z-index: 1;
  }
  .canceal_now {
    border: 1px solid #38bacf;
    color: #38bacf;
    background-color: white;
  }
  .bookoutside {
    width: 50%;
    height: 50%;
    background-color: white;
  }
  input[type="date"] {
    border: 2px solid #dddcdd;
    border-radius: 5px;
  }
  .singletimeslot {
    background-color: #38bacf;
    border-radius: 5px;
    color: white;
  }
  .book_now {
    background-color: #38bacf;
    border-radius: 5px;
    color: white;
  }
`;

const Outsideadminhome = styled.div`
  background-color: white;
  .singletimeslot {
    background-color: #2aabe4;
    color: white;
    border-radius: 10px;
    transition: 0.3;
  }
  .singletimeslot:hover {
    border: 5px solid #2aabe4;
  }
  .leave_comment,
  .input_box {
    border: 4px solid #3d5a80;
    border-radius: 15px;
  }
  .input_box {
    height: 50px;
  }
`;

const Singleplayer = styled.div`
  background-color: #e0fbfc;
  border-radius: 20px;
  border: 5px solid #293241;
`;

const Singletreckingview = styled.div`
  .small_header {
    background-color: #ee6c4d;
    border-radius: 10px;
  }
  .h1_book_now {
    background-color: #293241;
    color: #ee6c4d;
  }
  .h1_book_now_invert {
    background-color: #ee6c4d;
    color: #293241;
  }
  .input_no_of_people_in {
    background-color: #e0fbfc;
    border: 3px solid #293241;
    border-radius: 5;
    height: 50px;
    width: 100%;
  }
`;
const Approvecoach = styled.div`
  .singletreckingview_inside {
    border: 3px solid #293241;
    border-radius: 10px;
    background-color: #e0fbfc;
  }
`;

const Outersectionsinglecoachview = styled.div`
  .bg-coach {
    background-color: #ffcd24;
    border-radius: 20px;
  }
  .book-now-coach {
    background-color: #2aabe4;
    border-radius: 20px;
  }
`;
const Addplayerview = styled.div``;

const Outersectionsingletrainingview = styled.div`
  .bg-training {
    background-color: #ffcd24;
    border-radius: 20px;
  }
  .book-now-coach {
    background-color: #2aabe4;
    border-radius: 20px;
  }
`;
const Extrapaddingforbottom = styled.div`
  height: 600px;
`;

const Userhome = styled.div`
  .heading {
    background-color: #98c1d9;
    color: #3d5a80;
    border-radius: 30px;
  }
`;

export default Adminhome;
