import { useState } from "react";
import { NavLink } from "react-router-dom";

const Verify = () => {
  const [click1, setClick1] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  return (
    <div>
      {" "}
      <div className="w-full flex justify-center ">
        <div className="w-[400px] flex items-center space-y-10 flex-col">
          <div className=" relative w-full">
            <label
              className={`absolute transition-all duration-300 ${
                click1 ? "-top-7" : "top-3 left-3"
              }`}
            >
              Password
            </label>
            <input
              type="text"
              placeholder=""
              value={token}
              onChange={(e) => setToken(e.target.value)}
              onBlur={() => {
                setClick1(token ? true : false);
              }}
              onClick={() => {
                setClick1(true);
              }}
              className="input input-bordered bg-white input-info w-full "
            />
            <button className="btn btn-primary text-white text-[17px] bg-blue-600 mt-10 w-full">
              Register
            </button>

            <center className="mt-3">
              Have an account?{" "}
              <NavLink className="text-blue-600" to="/auth/login/client">
                Log in here
              </NavLink>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
