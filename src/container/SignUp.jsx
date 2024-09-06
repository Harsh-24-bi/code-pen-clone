import { useState } from "react";
import { Logo } from "../assets";
import { UserAuthInput } from "../components";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdPassword } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { signInWithGitHub, signInWithGoogle } from "../utils/helpers";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { fadeInOut } from "../animations";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("second");
  const [getEmailValidationStatus, setGetEmailValidationStatus] =
    useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const createNewUser = async () => {
    if (getEmailValidationStatus) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCred) => {
          if (userCred) {
            console.log(userCred);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const loginWithEmailPassword = async () => {
    if (getEmailValidationStatus) {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCred) => {
          if (userCred) {
            console.log(userCred);
          }
        })
        .catch((err) => {
          if (err.message.includes("invalid-credential")) {
            setAlert(true);
            setAlertMsg("Please check the email and password ..");
            console.log("Please check the email and password ..");
          } else {
            setAlert(true);
            setAlertMsg("There might be some technical error ..");
            console.log("There might be some technical error ...");
            
          }

          setInterval(() => setAlert(false), 4000);
        });
    }
  };

  return (
    <div className="text-primaryText w-full py-6 px-5">
      {/* Logo */}

      <img
        src={Logo}
        alt=""
        className="object-contain w-32  opacity-50 h-auto"
      />

      {/* section */}
      <div className="w-full flex flex-col items-center justify-center py-8">
        <p className="py-1 text-xl text-primaryText">Join With Us!</p>
        <div className="px-8 w-full md:w-auto py-4 rounded-xl bg-secondary shadow-md flex flex-col items-center justify-center gap-4">
          {/* email field */}
          <UserAuthInput
            label="Email"
            placeHolder="Email Here"
            isPass={false}
            key="Email"
            setStateFunction={setEmail}
            Icon={FaEnvelope}
            getEmailValidationStatus={setGetEmailValidationStatus}
          />

          {/* password field */}
          <UserAuthInput
            label="Password"
            placeHolder="Password Here"
            isPass={true}
            key="Password"
            setStateFunction={setPassword}
            Icon={MdPassword}
          />

          {/* alert */}

          <AnimatePresence>
            {alert && (
              <motion.p
                key={"Alert Message"}
                {...fadeInOut}
                className="text-red-500"
              >
                {alertMsg}
              </motion.p>
            )}
          </AnimatePresence>

          {/* login button */}

          {!isLogin ? (
            <motion.div
              onClick={createNewUser}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-full py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500"
            >
              <p className="text-xl text-white">Sign Up</p>
            </motion.div>
          ) : (
            <motion.div
              onClick={loginWithEmailPassword}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-full py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500"
            >
              <p className="text-xl text-white">Login</p>
            </motion.div>
          )}

          {/* Account Text section */}
          {!isLogin ? (
            <p className="text-sm text-primaryText flex items-center justify-center gap-3">
              Already Have an Account !
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="cursor-pointer text-emerald-500"
              >
                Login Here
              </span>
            </p>
          ) : (
            <p className="text-sm text-primaryText flex items-center justify-center gap-3">
              Don't Have an Account !
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="cursor-pointer text-emerald-500"
              >
                Create Account
              </span>
            </p>
          )}

          {/* forgot password section */}

          {/* -OR- */}

          <div className="flex items-center justify-center gap-8">
            <div className="h-[1px] w-24 rounded-md bg-[rgba(255,255,255,0.2)]"></div>
            <p>OR</p>
            <div className="h-[1px] w-24 rounded-md bg-[rgba(255,255,255,0.2)]"></div>
          </div>

          {/* Sign in with google */}
          <motion.div
            onClick={signInWithGoogle}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur w-full rounded-xl py-2 hover:bg-[rgba(256,256,256,0.4)] cursor-pointer"
          >
            <FcGoogle className="text-3xl" />
            <p className="text-xl text-white">Sign In With Google</p>
          </motion.div>

          {/* -OR- */}
          <div className="flex items-center justify-center gap-8">
            <div className="h-[1px] w-24 rounded-md bg-[rgba(255,255,255,0.2)]"></div>
            <p>OR</p>
            <div className="h-[1px] w-24 rounded-md bg-[rgba(255,255,255,0.2)]"></div>
          </div>

          {/* Sign in with github */}
          <motion.div
            onClick={signInWithGitHub}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur w-full rounded-xl py-2 hover:bg-[rgba(256,256,256,0.4)] cursor-pointer"
          >
            <FaGithub className="text-3xl" />
            <p className="text-xl text-white">Sign In With GitHub</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
