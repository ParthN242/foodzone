import React, { useEffect, useState } from "react";
import { ImageBox, ProviderAuth } from "./Auth";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpUserAsync } from "../../Redux/Auth/authApi";
import Loading from "../../Components/Loading/Loading";
import { toast } from "react-toastify";
import { clearState } from "../../Redux/Auth/authSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = { email, password };
    if (email.length > 0 && password.length > 0) {
      dispatch(signUpUserAsync(data));
    } else {
      toast.warn("Please fill all the fields");
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }

    if (success) {
      toast.success("Account Created Successfully");
      dispatch(clearState());
      navigate("/signin");
    }

    if (error) {
      toast.error(error);
      dispatch(clearState());
    }
  }, [user, success, error]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="w-full h-auto">
          <div className="py-10 max-lg:pt-0 max-md:pt-10 h-full">
            <div className="w-full flex max-lg:flex-col items-center justify-center">
              {/* Left */}
              <ImageBox />
              {/* Right */}
              <div className="w-[30rem] max-sm:w-screen">
                {/* Form */}
                <form className="p-2" onSubmit={submitHandler}>
                  <ProviderAuth />
                  <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p className="text-center text-textColor text-sm font-semibold mx-4">
                      OR
                    </p>
                  </div>
                  <h1 className="text-2xl text-center text-headingColor font-semibold mb-4 tracking-wide">
                    Sign Up
                  </h1>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full px-4 py-2 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded outline-none focus:border-orange-600 transition ease-in-out m-0"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded outline-none focus:border-orange-600 transition ease-in-out m-0"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-center bg-gradient-to-br from-orange-400 to-orange-500 hover:bg-orange-600 hover:shadow-lg text-white font-medium text-md px-7 py-3 w-full rounded uppercase transition duration-150 ease-in-out"
                  >
                    Sign Up
                  </motion.button>
                  <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p className="text-center mx-4 text-sm font-semibold text-textColor">
                      Already have an account?
                    </p>
                  </div>
                  <Link to="/signin">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 0.99 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-center bg-gradient-to-br from-orange-400 to-orange-500 hover:bg-orange-600 hover:shadow-lg text-white font-medium text-md px-7 py-3 w-full rounded uppercase transition duration-950 ease-in-out"
                    >
                      Login
                    </motion.button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SignUp;
