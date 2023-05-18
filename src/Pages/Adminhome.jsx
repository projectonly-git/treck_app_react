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

//__________________ Add a new trecking_____________________________
const Addtrecking = () => {
  const [treck, setTreck] = useState({
    name: "",
    duration: "",
    location: "",
    description: "",
    price: "",
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
    console.log(treck);
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
      </Addplayerview>
    </div>
  );
};

//______________ See all registered users________________________________
const getallcoachesfunc = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/coach/all`
  );
  return response.data;
};
const Seeallusers = () => {
  let players = ["coach1", "coach2", "coach3"];

  // const {
  //   data: allcoaches,
  //   isLoading: allcoachesloading,
  //   refetch: refetchallcoaches,
  // } = useQuery("get_all_coaches", () => getallcoachesfunc(), {
  //   refetchOnMount: false,
  //   refetchInterval: 5000,
  // });

  ////console.log(allcoaches)

  // if (allcoachesloading) {
  //   return "loading";
  // }
  return (
    <div className="container">
      <div className="row container">
        {players.map((player, index) => (
          <div className="col-lg-4  col-sm-6 col-12 my-2" key={index}>
            <Singleplayer className="p-2">
              <h1>emailid:</h1>
              <p>maityapurba020@gmail.com</p>
              <h5>username</h5>
              <p>apurba maity</p>
            </Singleplayer>
          </div>
        ))}
      </div>
    </div>
  );
};

//___________________________________________________

const getallclubfunc = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/club/all`
  );
  return response.data;
};
const Addtrainingsession = ({ user }) => {
  const [selectedDivIndex, setSelectedDivIndex] = useState(-1);
  const [timeslot, setTimeslot] = useState([
    "08:00-10:00",
    "10:00-12:00",
    "12:00-14:00",
    "14:00-16:00",
    "16:00-18:00",
    "18:00-20:00",
    "20:00-22:00",
  ]);
  const [booking, setBooking] = useState({
    bookingdate: "none",
    bookingtime: "none",
  });
  const [training, setTraining] = useState({
    name: "",
    startDate: "",
    endDate: "",
  });
  const [coach, setCoach] = useState("");
  const [club, setClub] = useState("");
  const handleOptionChange = (event) => {
    setCoach(event.target.value);
    //console.log(coach);
  };

  const handleOptionChangeclub = (event) => {
    setClub(event.target.value);
    //console.log(club);
  };

  const {
    data: allcoaches,
    isLoading: allcoachesloading,
    refetch: refetchallcoaches,
  } = useQuery("get_all_coaches", () => getallcoachesfunc(), {
    refetchOnMount: false,
    refetchInterval: 5000,
  });

  const {
    data: allclub,
    isLoading: allclubloading,
    refetch: refetchallclub,
  } = useQuery("get_all_club", () => getallclubfunc(), {
    refetchOnMount: false,
    refetchInterval: 5000,
  });

  const changeTraining = (event) => {
    const { name, value } = event.target;
    setTraining((prevObject) => ({
      ...prevObject,
      [name]: value,
    }));
    //console.log(training);
  };

  const addEvent = () => {
    training.time = booking.bookingtime;
    //console.log(coach+"-----"+club)
    if (
      training.name == "" ||
      training.startDate == "" ||
      training.endDate == "" ||
      club == "" ||
      coach == ""
    ) {
      toast.error("enter all the fields", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    axios
      .post(
        process.env.REACT_APP_BACKEND_URL +
          "/club/addTrainingGroup/" +
          coach +
          "/" +
          club,
        training
      )
      .then(
        (response) => {
          //console.log(response.data);
          toast.success("this event has been added", {
            position: toast.POSITION.TOP_RIGHT,
          });
        },
        (error) => {
          //console.log("some error");
        }
      );
  };

  const handlebookingtime = (val, index) => {
    setBooking({ ...booking, bookingtime: val });
    setSelectedDivIndex(index);
  };

  //console.log(allcoaches);

  if (allcoachesloading || allclubloading) return "loading";
  return (
    <Admin_view_schedule_traing_season className="container">
      <Addplayerview className="mt-5">
        <h1>Add a training batch</h1>
        <div class="">
          <input
            type="text"
            placeholder="enter traing batch name"
            className="px-2"
            name="name"
            onChange={changeTraining}
          />
          <br />
          <h5>choose a coach</h5>
          <select value={coach} onChange={handleOptionChange}>
            <option value="" key="">
              choose a coach
            </option>
            {allcoaches.map((option) => (
              <option value={option.coach_id} key={option.coach_id}>
                {option.user.name}
              </option>
            ))}
          </select>
          <h5>choose a club</h5>
          <select value={club} onChange={handleOptionChangeclub}>
            <option value="" key="">
              choose a club
            </option>
            {allclub.map((club) => (
              <option value={club.club_id} key={club.coach_id}>
                {club.club_name}
              </option>
            ))}
          </select>

          <br />
          <div className="d-flex flex-row my-3">
            <div>
              <h5>select a start date</h5>
              <input
                type="date"
                placeholder="choose the start date"
                className="px-3"
                name="startDate"
                onChange={changeTraining}
              />
            </div>

            <div className="mx-5">
              <h5>select a end date</h5>
              <input
                type="date"
                placeholder="choose the start date"
                className="px-3 mx-3"
                name="endDate"
                onChange={changeTraining}
              />
            </div>
          </div>
          <br />

          <h5>choose a time duration for the training batch</h5>
          <div className="row my-3">
            {timeslot.map((single_time_slot, index) => (
              <div className="col-lg-3">
                <div
                  className="singletimeslot h6 cursor_pointer px-3"
                  onClick={() => handlebookingtime(single_time_slot, index)}
                  style={{
                    backgroundColor:
                      selectedDivIndex === index ? "red" : "#38bacf",
                  }}
                >
                  {single_time_slot}
                </div>
              </div>
            ))}
          </div>

          <input
            type="submit"
            value="create new training batch"
            name="password"
            className="px-3 btn btn-primary"
            onClick={() => addEvent()}
          />
        </div>
      </Addplayerview>
    </Admin_view_schedule_traing_season>
  );
};
//______________________________________________________-

//_______________________________________________________________
const getallpendingrequestfunc = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/admin/getAllPersonalCoachRequest`
  );
  return response.data;
};

const Rendersinglecoachbooking = ({ spr, approve }) => {
  if (spr.status === "WAITING") {
    return (
      <>
        <tr className="not_heading_row my-1 h6">
          <td>{spr.player.user.name}</td>
          <td>{spr.player.user.email}</td>
          <td>{spr.coach.user.name}</td>

          <td className="p-2">
            <input
              type="submit"
              className="btn btn-success mx-3"
              value="approve"
              onClick={() => approve(spr.personal_training_id)}
            />
          </td>
        </tr>
      </>
    );
  }
};

const Approvetreckrequests = () => {
  let [allpendingrequest, setAllpendingrequest] = useState([1, 2, 3, 4]);
  // const {
  //   data: allpendingrequest,
  //   isLoading: allpendingrequestloading,
  //   refetch: refetchallpendingrequest,
  // } = useQuery("get_all_allpendingrequest", () => getallpendingrequestfunc(), {
  //   refetchOnMount: false,
  //   refetchInterval: 5000,
  // });
  //console.log(allpendingrequest);

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

  // if (allpendingrequestloading) return "loading";
  return (
    <Approvecoach className="container">
      <div className="row">
        {allpendingrequest.map((index, spr) => {
          return (
            <>
              <div className="col-lg-4">
                <div className="singletreckingview_inside bg-training my-2">
                  <Singletreckingview>
                    <div className=" p-3">
                      <h3>Kedarnath treck</h3>
                      <h5>
                        <span className="small_header px-2">Duration: </span>4
                        days
                      </h5>
                      <h5>
                        <span className="small_header px-2">location: </span>
                        kashmir
                      </h5>
                      <div className="h1_book_now px-3">
                        <h1>$2200</h1>
                      </div>
                    </div>
                  </Singletreckingview>
                  <Singletreckingview className="my-3">
                    <div className="bg-training p-3">
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
                      <div className="h1_book_now px-3">
                        <h1>$2300</h1>
                      </div>
                    </div>
                  </Singletreckingview>
                </div>
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
    return <Approvetreckrequests />;
  }
  if (choose === 2) {
    return <Seeallusers />;
  }
  if (choose === 3) {
    return <Approvetreckrequests />;
  }
};

//+++++++++++++++++++++++++++++++++++++++++++   Main Home Page For Admin Functionalities   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function Adminhome({ user }) {
  const [choose, setChoose] = useState(0);
  console.warn = function () {};
  let actions = [
    "Add New Trecking",
    "Approve User Requests",
    "See All Users",
    "Post New Hotels",
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
  .input_no_of_people_in {
    background-color: #e0fbfc;
    border: 3px solid #293241;
    border-radius: 15px;
    height: 50px;
    width: 100%;
  }
`;
const Approvecoach = styled.div`
  .singletreckingview_inside {
    border: 5px solid #293241;
    border-radius: 20px;
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

export default Adminhome;
