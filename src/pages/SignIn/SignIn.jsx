import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const SignIn = () => {
    const {signInUser}=use(AuthContext);
    const handleSignIn=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);

        //signin user
        signInUser(email,password)
        .then(result=>{
            //console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            
           {/* <Lottie animationData={registerLottie} loop={true}></Lottie> */}
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">SignIn</button>
              </fieldset>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    );
};

export default SignIn;