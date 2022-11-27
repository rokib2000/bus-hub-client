import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const { displayName, email, photoURL, phoneNumber } = user;

  return (
    <div>
      <div className=" font-sans py-48 w-full flex flex-row justify-center items-center">
        <div className="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
          <img className="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src={photoURL} alt="" />
          <div className="text-center mt-2 text-3xl font-medium">{displayName}</div>
          <div className="text-center mt-2 font-light text-sm">{email}</div>
          <div className="text-center font-normal text-lg">{phoneNumber}</div>

          {/* <hr className="mt-8" /> */}
          <div className="flex p-4">
            <div className="w-1/2 text-center">
              {/* <span className="font-bold">Email Verified: </span> {emailVerified ? "True" : "False"} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
