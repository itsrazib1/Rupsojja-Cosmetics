import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: 'User Login Successful.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
        navigate(from, { replace: true });
      });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="min-h-screen bg-base-200 flex justify-center items-center">
  <div className="w-full max-w-md">
    <div>
    <h1 className="text-5xl font-bold text-center mb-6">Login now!</h1>
    <p className="text-center py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    
    <div className="bg-base-100 shadow-2xl p-8">
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" id="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div>
          <label htmlFor="password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" id="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div>
          <label className="label">
            <LoadCanvasTemplate />
          </label>
          <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />
        </div>
        <div className="flex justify-center">
          <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p className="text-center mt-4"><small>New Here? <Link to="/signup">Create an account</Link></small></p>
      <SocialLogin />
    </div>
  </div>
</div>

    </>
  );
};

export default Login;
