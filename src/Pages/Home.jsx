import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Adminhome from "./Adminhome";
import Coachhome from './Coachhome'
import Homewithoutlogin from './Homewithoutlogin'



import Userview from './Userupcomingevents'

const Returnthemainview = ({ user , updateUser}) => {
  if (localStorage.getItem("isloggedin") === null) {
    return (
      <>
        <Homewithoutlogin />
      </>
    );
  } else if (localStorage.getItem("isloggedin") === "yes") {
    if (localStorage.getItem("userrole") === "user") {
      return (
        <>
          <Userview />
        </>
      );
    }
    if (localStorage.getItem("userrole") === "admin") {
      return (
        <>
          <Adminhome/>
        </>
      );
    }
    if (localStorage.getItem("userrole") === "COACH") {
      return (
        <>
          <Coachhome user={user} />
        </>
      );
    }
    
  }
};

function Home(props) {
  const { cort, cortid } = useParams();
  let [user, setUser] = useState({
    pid: "52",
    
    isregisteredforclub: true,
    clubid: "1",
    
    isloggedin: "yes",
    email: "",


    userrole: "player",

    trainingbooking : null
    
  });
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  const update = () => {
    if (user.isloggedin === "no") {
      setUser({
        isloggedin: "yes",
        userid: "",
        userrole: "",
      });
    } else {
      setUser({
        isloggedin: "no",
        userid: "",
        userrole: "",
      });
    }
  };

  useEffect(() => {}, [user]);
    return (
      <>
        {/*<img src="footbal1.gif" />*/}
        <Returnthemainview user={user} updateUser={updateUser} />
      </>
    );
}

export default Home;
