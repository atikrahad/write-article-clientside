import { Link } from "react-router-dom";
import loginimg from "../assets/Image/8850917.jpg";
import { AiOutlineMail, AiOutlineLock, AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";

const Login = () => {

    const [open, setOpen] = useState("!open")

    const handleshowPass = open => {
        setOpen(open)
    }

    

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
              <form className="">
                <div className="relative">
                  <input
                    
                    type="email"
                    placeholder='email'
                    className="border-b-2 bg-transparent w-[88%] ml-8 px-1 my-2 outline-none border-sky-600"
                    required
                  />
                  <AiOutlineMail className="absolute  text-2xl left-0 top-[30%]"></AiOutlineMail>
                </div>
                <div className="relative">
                  <input
                    type={open? "text" : "password"}
                    placeholder="password"
                    className="border-b-2 bg-transparent my-2 w-[88%] mx-auto  ml-8 px-1 outline-none border-sky-600"
                    required
                  />
                  <AiOutlineLock className="absolute text-2xl left-0 top-[30%]"></AiOutlineLock>
                  <div className="absolute lg:mr-7 md:mr-1 right-0 top-[35%]" onClick={()=>handleshowPass(!open)}>
                    {
                        open? <AiFillEyeInvisible></AiFillEyeInvisible> : <AiFillEye></AiFillEye>
                    }
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <button className="py-2  font-semibold px-5  bg-sky-600 rounded-sm text-white">
                    Login
                  </button>
                  <Link to="/register" className="underline" >Create an account</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
