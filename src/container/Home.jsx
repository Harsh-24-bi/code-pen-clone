import { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronDoubleLeft } from "react-icons/hi2";
import { MdHome } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa6";
import { Logo } from "../assets";
import { Link, Route, Routes } from "react-router-dom";
import { Projects, SignUp } from "../container";
import { useSelector } from "react-redux";
import { UserProfileDetails } from "../components";

function Home() {
  const [isSideMenu, setisSideMenu] = useState(false);
  const user = useSelector((state)=> state.user?.user)
  return (
    <>
      <div
        className={`w-2 ${
          isSideMenu ? "w-2" : "flex-[.2] xl:flex[.4]"
        } min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all duration-200 ease-in-out`}
      >
        {/* anchor */}

        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={() => setisSideMenu(!isSideMenu)}
          className="w-6 h-6 bg-secondary rounded-tr-md rounded-br-md absolute -right-6 flex items-center justify-center cursor-pointer"
        >
          <HiChevronDoubleLeft className="text-white text-lg" />
        </motion.div>

        <div className="overflow-hidden w-full flex flex-col gap-6">
          {/* logo */}
          <Link to={"/home"}>
            <img src={Logo} alt="Logo" className="object-contain w-72 h-auto" />
          </Link>

          {/* start coding */}

          {/* <div className='px-6 py-3 flex items-center justify-center rounded-xl border border-gray-400 cursor-pointer group-hover:border-gray-200'>
                    <p className=' text-gray-400 group-hover:border-gray-200 capitalize'>Start Coding</p>
                </div> */}

          <Link to={"/newProject"}>
            <div className="px-6 py-3 flex items-center justify-center rounded-xl border border-gray-400 cursor-pointer group hover:border-gray-200">
              {" "}
              <p className="text-gray-400 group-hover:text-gray-200">
                Start Coding
              </p>
            </div>
          </Link>

          {/* Home navigation */}

          {user && (
            <Link
              to={"/home/projects"}
              className="flex items-center justify-center gap-6"
            >
              <MdHome className="text-lg text-primaryText" />
              <p className="text-lg text-primaryText">Home</p>
            </Link>
          )}
        </div>
      </div>
      <div className="flex-1 min-h-screen max-h-screen overflow-y-scroll h-full flex flex-col item-start justify-start px-4 md:px-12 py-4 md:py-12">
        {/* top section */}
        <div className="w-full flex item-center justify-between gap-3">
          {/* search */}

          <div className="flex items-center justify-center gap-3 bg-secondary w-full px-4 py-3 rounded-md">
            <FaSearchengin className="text-2xl text-primaryText cursor-pointer" />
            <input
              type="text"
              className="flex-1 px-4 py-1 text-xl bg-transparent outline-none border-none text-primaryText placeholder:text-gray-600"
              placeholder="Search Here ...."
              name=""
              id=""
            />
          </div>

          {/* Login / Account section /Profile */}

          {!user && (
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center gap-3"
            >
              <Link
                to={"/home/auth"}
                className="px-6 py-2 bg-emerald-500 rounded-md text-white text-lg cursor-pointer hover:bg-emerald-700 text-nowrap h-full flex items-center justify-center"
              >
                Sign Up
              </Link>
            </motion.div>
          )}
          {user && <UserProfileDetails />}
        </div>

        {/* bottom section */}
        <div className="w-full">
          <Routes>
            <Route path="/*" element={<Projects />} />
            <Route path="/auth" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Home;
