import { Link, useNavigate } from "react-router-dom";
import loginimg from "../assets/Image/8850917.jpg";
import {
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineLock,
  AiFillEyeInvisible,
  AiFillEye,
} from "react-icons/ai";
import { useContext, useState } from "react";
import { Authinfo } from "../Shared-Component/Authprovider";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase";

const Register = () => {
  const [open, setOpen] = useState("!open");
  const { handleRegister,user, setError, error } = useContext(Authinfo);

  const handleshowPass = (open) => {
    setOpen(open);
  };

  const navigate = useNavigate()

  const handleregister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const pic = e.target.pic.value;
    if(user){
      return setError("alredy loged in")
    }
    setError("");

    if (password.length < 6) {
      return setError("Password should be at least 6 characters");
    } else if (!/[A-Z]/.test(password)) {
      return setError("Password should be a Capital latter");
    }
    // eslint-disable-next-line no-useless-escape
    else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      return setError("Password should be a special character");
    }

    handleRegister(email, password)
      .then((userCredential) => {
        const userinfo = userCredential.user;
        console.log(userinfo);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: pic
        })
        .then(()=>{
          navigate('/')
        })
        .catch(error => {
          console.log(error);
        })

      })
      .catch((error) => {
        const errorMessage = error.code.split("/");
        const message = errorMessage.slice(1, errorMessage.length);
        setError(message.join());
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
              <h1 className=" font-bold pb-3 text-4xl">Register</h1>
              <form onSubmit={handleregister} className="">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="full name"
                    className="border-b-2 bg-transparent w-[88%] ml-8 px-1 my-2 outline-none border-sky-600"
                    required
                  />
                  <AiOutlineUser className="absolute  text-2xl left-0 top-[30%]"></AiOutlineUser>
                </div>
                <div className="relative">
                  <input
                    type="url"
                    name="pic"
                    placeholder="img url must be short"
                    className="border-b-2 bg-transparent w-[88%] ml-8 px-1 my-2 outline-none border-sky-600"
                    required
                  />
                  <AiOutlineUser className="absolute  text-2xl left-0 top-[30%]"></AiOutlineUser>
                </div>
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
                    Register
                  </button>
                  <div>
                    <Link to="/login" className="underline">
                      Have account login
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
