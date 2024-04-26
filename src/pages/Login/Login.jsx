import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [passType, setPassType] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const { login } = useContext(AuthContext);

  const onSubmit = ({ email, password }) => {
    login(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("Login Successful");
        // window.location.reload();
      })
      .catch(() => toast.error("Password Didn't match"));
  };
  return (
    <div>
      <Navbar />
      <div className="md:w-1/2 mx-auto mt-12 bg-art text-black p-6 rounded-3xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input
            {...register("email", { required: "Email is required!" })}
            type="email"
            placeholder="Enter Your Email"
            className="w-full input input-bordered mt-2 mb-4 text-cozy-green"
          />
          {errors.email && (
            <p className="text-red-300 mb-2">{errors.email.message}</p>
          )}

          <div className="relative">
            <label>Password</label>
            <input
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              type={passType === true ? "password" : "text"}
              placeholder="Password"
              className="w-full input input-bordered mt-2 mb-4 text-cozy-green"
            />
            <button
              type="button"
              className="absolute right-2 top-11 text-cozy-green text-2xl"
              onClick={() => setPassType(!passType)}
            >
              {passType ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-red-300 mb-2">{errors.password.message}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white px-4 py-2 rounded-lg text-cozy-green font-semibold"
            >
              {isSubmitting ? "Submitting..." : "Login"}
            </button>
          </div>
          <div className="mt-4 text-center">
            <p>
              Don&apos;t have an account?{" "}
              <Link
                to={`/register?state=${location?.state}`}
                className="underline text-cozy-yellow"
                state={location.state}
                replace
              >
                Create an account
              </Link>
            </p>
          </div>
        </form>
      </div>

      <div className="">
        <SocialLogin />
      </div>
    </div>
  );
}

export default Login;
