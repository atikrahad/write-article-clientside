import { Link, useLocation, useNavigate } from "react-router-dom";
import loginimg from "../assets/Image/8850917.jpg";
import {
  AiOutlineMail,
  AiOutlineLock,
  AiFillEyeInvisible,
  AiFillEye,
} from "react-icons/ai";
import { useContext, useState } from "react";
import { Authinfo } from "../Shared-Component/Authprovider";
import axios from "axios";

const Login = () => {
  const [open, setOpen] = useState("!open");
  const { handleLogin, error, user, setError, handleGooglesignin } =
    useContext(Authinfo);
  const location = useLocation();
  console.log(location);
  const handleshowPass = (open) => {
    setOpen(open);
  };
  const navigete = useNavigate();
  const handleLoginuser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (user) {
      return setError("alredy loged in");
    }

    handleLogin(email, password)
      .then((userlog) => {
        console.log(userlog);
        
        const user = {email}

        axios.post('https://blogsite-server.vercel.app/jwt', user, {withCredentials: true})
        .then(res => {
          console.log(res.data);

          if (location.state !== null) {
            navigete(location.state);
          } else {
            navigete("/");
          }

        })
        
      })
      .catch((error) => {
        console.log(error);
        setError("email/password is not valide");
      });
  };

  const handlegoogleuser = () => {
    if (user) {
      return setError("alredy loged in");
    }
    handleGooglesignin()
      .then((userinfo) => {
        const email = userinfo.user.email;

        const user = {email}

        axios.post('https://blogsite-server.vercel.app/jwt', user, {withCredentials: true})
        .then(res => {
          console.log(res.data);

          if (location.state !== null) {
            navigete(location.state);
          } else {
            navigete("/");
          }

        })

      })
      .catch((error) => {
        console.log(error);
        setError(error.code);
      });
  };

  return (
    <div className="h-full py-16 bg-sky-100 flex items-center justify-center">
      <div className="shadow-2xl bg-white pb-10 md:pb-0 rounded-md w-[90%] max-w-7xl h-[90%] mx-auto">
        <div className="flex flex-col md:flex-row items-center h-full justify-center">
          <div className="w-full md:w-1/2">
            <img className="mx-auto w-[80%] " src={loginimg} alt="" />
          </div>
          <div className="md:w-1/2">
            <div className="p-16 md:w-8/9  bg-sky-100 shadow-lg">
              <h1 className=" font-bold pb-3 text-4xl">Login</h1>
              <form onSubmit={handleLoginuser} className="">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="border-b-2 bg-transparent w-[88%] ml-8 px-1 my-2 outline-none border-sky-600"
                    required
                  />
                  <AiOutlineMail className="absolute  text-2xl left-0 top-[30%]"></AiOutlineMail>
                </div>
                <div className="relative">
                  <input
                    type={open ? "password" : "text"}
                    placeholder="password"
                    name="password"
                    className="border-b-2 bg-transparent my-2 w-[88%] mx-auto  ml-8 px-1 outline-none border-sky-600"
                    required
                  />
                  <AiOutlineLock className="absolute text-2xl left-0 top-[30%]"></AiOutlineLock>
                  <div
                    className="absolute lg:mr-7 md:mr-1 right-0 top-[35%]"
                    onClick={() => handleshowPass(!open)}
                  >
                    {open ? (
                      <AiFillEye></AiFillEye>
                    ) : (
                      <AiFillEyeInvisible></AiFillEyeInvisible>
                    )}
                  </div>
                </div>
                <p className="text-red-600">{error}</p>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-6">
                  <button className="py-2  font-semibold px-5  bg-sky-600 rounded-sm text-white">
                    Login
                  </button>
                  <div>
                    <Link to="/register" className="underline">
                      Create an account
                    </Link>
                  </div>
                </div>
              </form>
              <div>
                <button
                  onClick={handlegoogleuser}
                  className="btn w-full my-2 border-sky-600 hover:border-sky-600"
                >
                  Login with{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 256 262"
                    id="google"
                  >
                    <path
                      fill="#4285F4"
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    ></path>
                    <path
                      fill="#EB4335"
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
