import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname ?? "/";

  const imageHostKey = process.env.REACT_APP_IMAGEBB_KEY;

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const accountType = form.type.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // toast.success("Account create successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });

    // image upload
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          // console.log(imageData.data.url);
          const userImage = imageData.data.url;
          updateUserProfile(name, userImage);

          // const userInfo = { displayName: name, photoURL: userImage };

          //save data database
          saveUser(name, email, userImage, accountType);
          toast.success("Account create successfully");
          navigate(from, { replace: true });
          form.reset();
        }
      });
  };

  const updateUserProfile = (name, image) => {
    updateUser(name, image)
      .then(() => {
        // console.log("Display name update");
      })
      .catch((error) => console.error(error));
  };

  const saveUser = (name, email, image, accountType) => {
    const user = { name, email, image, accountType };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
            Create To Your Account
          </div>

          <div className="mt-10">
            <form onSubmit={handleSignUp}>
              <div className="flex flex-col mb-6">
                <label htmlFor="name" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  Full Name:
                </label>
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Your Full Name"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  Profile Picture:
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="image"
                    required
                    // className="file-input file-input-bordered w-full max-w-xs"
                    className=" file-input-bordered text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  Account Type:
                </label>
                <div className="relative">
                  <select
                    name="type"
                    required
                    className="w-full text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400  py-2 focus:outline-none focus:border-blue-400"
                  >
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  Email Address:
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  Password:
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span className="mr-2 uppercase">Signup</span>
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center mt-6">
            <Link
              to="/login"
              className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
            >
              <span className="ml-2">Already have an account? please login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
