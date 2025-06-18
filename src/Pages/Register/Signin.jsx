import React, { useContext } from "react";
import Authcontext from "../../Context/Authcontext";
import Lottie from "lottie-react";
import logindata from "../../assets/Animation - 1749484695854.json";
import { useLocation, useNavigate } from "react-router";

const Signin = () => {
  const { signin } = useContext(Authcontext);
  const location = useLocation();
  const navigate = useNavigate()
   console.log('sig in ' ,location);
   const from = location.state || '/'
 



  const handlesignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const Password = form.Password.value;
    const values = { email, Password };
    console.log(values);

    // show Password validation  error
    signin(email, Password)
      .then((result) => {
        console.log(result.user);
        navigate(from)
        
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="w-94 text-center lg:text-left">
           
            <Lottie animationData={logindata}></Lottie>
          </div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body ml-8 mt-4">
            <h1 className="text-4xl font-bold">Login Now!</h1>

            <form onSubmit={handlesignin} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
