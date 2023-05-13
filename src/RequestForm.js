import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RequestForm() {

  const navigate = useNavigate() ; 
  const state = useContext(AppContext);
  const [token , setToken] = state.token ; 
  const [user, setUser] = state.userApi.user;
  const [formData, setFormData] = useState({
    location : "",
    desc : ""
  });


  const postRequest = async()=>{
    try {
      await axios.post('request/addRequest' , formData , {
        headers : {
          Authorization : token 
        }
      }) ; 
    } catch (error) {
      console.log(error.message);
    }
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    postRequest() ; 
    navigate('/') ; 
    
  };

  const changeHandler = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(()=>{
    console.log(user);
  } , [user])

  return (
    <div class="">
      <Navbar />
      <div className="flex items-center max-lg:h-screen lg:h-fit w-full justify-center bg-[url('../public/images/background.png')]  bg bg-no-repeat rounded-xl relative">
        <div class="backdrop-blur-md h-full w-full absolute right-0 left-0 top-0 bottom-0 z-10 rounded-xl opacity-30 bg-white"></div>
        <div className="w-[40%] min-w-[360px] bg-white rounded-xl shadow-xl px-10 py-8 m-4 md:max-w-sm md:mx-auto border z-20 mb-10">
          <span className="block w-full text-2xl uppercase font-bold mb-6">
            Help Save A Life
          </span>
          <form onSubmit={submitHandler} className="flex gap-2 flex-col">
            <div class="flex gap-3">
              <div>
                <label for="firstname" className="block text-xs mb-1 w-1/2">
                  First Name
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
                  type="text"
                  placeholder="Patient First Name"
                  name="firstName"
                  value={user.firstName}
                />
              </div>
              <div>
                <label for="lastName" className="block text-xs mb-1 w-1/2">
                  Last Name
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
                  type="text"
                  placeholder="Patient Last Name"
                  name="lastName"
                  value={user.lastName}
                />
              </div>
            </div>
            <div>
              <label for="email" className="block text-xs mb-1 w-1/2">
                Email
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
                type="email"
                placeholder="Patient Email-Id"
                name="email"
                value={user.email}
              />
            </div>
            <div>
              <label for="bloodGrp" className="block text-xs mb-1 w-1/2">
                Blood Group
              </label>
              <select
                name="bloodGrp"
                id="bloodGrp"
                value={user.bloodGrp}
                class="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
              >
                <option value={"A+"}>A+</option>
                <option value={"A-"}>A-</option>
                <option value={"B+"}>B+</option>
                <option value={"B-"}>B-</option>
                <option value={"AB-"}>AB-</option>
                <option value={"AB-"}>AB-</option>
                <option value={"O+"}>O+</option>
                <option value={"O-"}>O-</option>
              </select>
            </div>

            <div>
              <label for="Location" className="block text-xs mb-1 w-1/2">
                Location
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
                type="text"
                id = "Location"
                placeholder="Hospital Address"
                name="location"
                value={formData.location}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label for="message" className="block text-xs mb-1">
                Details
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:border-[#2593D2] align-text-top"
                type="text"
                height="100px"
                placeholder="Details"
                name="desc"
                value={formData.desc}
                onChange={changeHandler}
              />
            </div>
            <button className="max-lg:w-[40vw] px-5 py-2 rounded-md bg-[#f45454] hover:scale-105 transition-all duration-200 text-white">
              Request
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
