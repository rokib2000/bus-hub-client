import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname ?? "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Login successfully");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const googleUser = result.user;
        if (googleUser) {
          console.log(googleUser);

          const name = googleUser.displayName;
          const email = googleUser.email;
          const image = googleUser.photoURL;
          const uid = googleUser.uid;
          const accountType = "buyer";

          const user = { name, email, image, uid, accountType };
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

          toast.success("Login successfully");
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        console.log(error);
      });
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
            Login To Your Account
          </div>
          <button
            onClick={handleGoogleLogin}
            className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200"
          >
            <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
              <FaGoogle />
            </span>
            <span>Login with Google</span>
          </button>
          <div className="relative mt-10 h-px ">
            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
              <span className="bg-white px-4 text-xs text-gray-500 uppercase">Or Login With Email</span>
            </div>
          </div>
          <div className="mt-10">
            <form onSubmit={handleSignIn}>
              <div className="flex flex-col mb-6">
                <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  Email Address:
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Email Address"
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
                    required
                    className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center mb-6 -mt-4">
                <div className="flex ml-auto">
                  <Link to="" className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">
                    Forgot Your Password?
                  </Link>
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span className="mr-2 uppercase">Login</span>
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center mt-6">
            <Link
              to="/signup"
              className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
            >
              <span className="ml-2">You don't have an account? please sign up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
