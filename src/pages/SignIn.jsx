import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth-service";
import { addToken } from "../store/redux/authSlice";

const SignIn = () => {
  // const [user,setUser]=useState({
  //     email: '',
  //     password:''
  // });
  // const handleChange=(e)=>{
  //     setUser((prev)=>{
  //         return {
  //             ...prev,
  //             [e.target.name]:e.target.value
  //         }
  //     })
  // }
  // const { addToken } = useContext(LoginContext);
  const dispatch=useDispatch();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const user = Object.fromEntries(fd);
    const { username, password } = user;
    try {
      const res = await login(username, password);
      // addToken(res.data.token);
      dispatch(addToken(res.data.token))
      sessionStorage.setItem('token',res.data.token)
      setError(null);
      navigate("/product");
    } catch (error) {
      setError(error.response.data);
      navigate("/sign-in");
    }
  };
  return (
    <div className="flex w-full flex-col gap-6 items-center ">
      <section className="text-red-500 text-sm ">
        {error?.message ? error.message : undefined}
      </section>
      <form className="w-[40%]" method="post" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="username-success"
            className={`block mb-2 text-sm font-medium ${
              error ? `text-red-700` : `text-green-700`
            }`}
          >
            Your Email
          </label>
          <input
            type="text"
            name="username"
            id="username-success"
            className={`bg-red-50 border block w-full p-2.5 text-sm rounded-lg ${
              error
                ? `border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500`
                : `text-green-900 placeholder-green-700 focus:ring-green-500 focus:border-green-500 border-green-500`
            }  `}
            placeholder="Enter Your Email"
          />
          {error?.username ? (
            <p className="mt-2 text-sm text-red-600 ">
              <span className="font-medium">Oops!</span> {error.username}
            </p>
          ) : undefined}
        </div>
        <div>
          <label
            htmlFor="username-error"
            className={`block mb-2 text-sm font-medium ${
              error ? `text-red-700` : `text-green-700`
            }`}
          >
            Your Password
          </label>
          <input
            type="password"
            name="password"
            id="username-error"
            className={`bg-red-50 border block w-full p-2.5 text-sm rounded-lg ${
              error
                ? `border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500`
                : `text-green-900 placeholder-green-700 focus:ring-green-500 focus:border-green-500 border-green-500`
            }  `}
            placeholder="Enter Your Password"
          />
          {error?.password ? (
            <p className="mt-2 text-sm text-red-600 ">
              <span className="font-medium">Oops!</span> {error.password}
            </p>
          ) : undefined}
        </div>
        <div className="flex justify-center items-center">
          <button className="mt-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
            SignIn
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
